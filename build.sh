#!/bin/bash
# Usage: ./dev.sh [once]
# Description: Make the PCB file from the keyboard.yaml file.
# Whenever the keyboard.yaml file is modified, the PCB file is regenerated.
# If the "once" argument is passed, the PCB file is only generated once and
# the script exits.

set -e

# Check arguments
if [[ "$1" != "once" && "$1" != "cases" && "$1" != "" ]]; then
	echo "Usage: $0 [once] [cases]"
	exit 1
fi

OUTPUT_DIR=output

pcbnew_pid=

open_pcb() {
    killall pcbnew || true
    rm -rf $OUTPUT_DIR/pcbs/\~main.kicad_pcb.lck
    
    pcbnew $OUTPUT_DIR/pcbs/main.kicad_pcb &
    pcbnew_pid=$!
} 

convert_cases() {
    # Convert the cases to the correct format
    for case in output/cases/*.jscad; do
        npx @jscad/cli@1 $case
    done
}

build() {
	node_modules/ergogen/src/cli.js . -o $OUTPUT_DIR
}

if [[ "$1" == "cases" ]]; then
    build  && \
        convert_cases
	exit 0
fi

build  && \
    open_pcb || true

if [[ "$1" == "once" ]]; then
	exit 0
fi

while true; do
	fswatch config.yaml footprints/ | 
        build  && \
        open_pcb || true
done
