/*
  * Battery connection pads
  */

module.exports = {
    params: {
        designator: 'BATTPAD',
        plus: undefined,
        minus: undefined,
        spacing: 2, // mm, between the two pads. Should be as much as possible to avoid short circuits
        symbol_size: 1.5, // mm, from center to end of each line of plus symbol
        pad_size: 1.5, // mm, size of each pad
    },
    body: p => `
  
    (module ComboDiode (layer F.Cu) (tedit 5B24D78E)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${
          // Bottom and top layers
          // ['F', 'B'].map(l => `
          ['B'].map(l => `
            ${'' /* plus symbol */}
            (fp_line (start ${-p.spacing/2-p.symbol_size} 0) (end ${-p.spacing/2+p.symbol_size} 0) (layer ${l}.SilkS) (width .1))
            (fp_line (start ${-p.spacing/2} ${-p.symbol_size}) (end ${-p.spacing/2} ${p.symbol_size}) (layer ${l}.SilkS) (width .1))

            (fp_text user "B+" (at ${-p.spacing/2-0.5} ${p.symbol_size*1.5}) (layer ${l}.SilkS) (effects (font (size 1 1) (thickness 0.15))))
            (fp_text user "B-" (at ${p.spacing/2+1} ${p.symbol_size*1.5}) (layer ${l}.SilkS) (effects (font (size 1 1) (thickness 0.15))))

            ${'' /* pads */}
            (pad 1 thru_hole circle (at ${-p.spacing/2} 0 ${p.rot}) (size  1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.plus.str})
            (pad 2 thru_hole circle (at ${p.spacing/2} 0 ${p.rot}) (size  1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.minus.str})
          `).join('')
        }
    )
  `
}
