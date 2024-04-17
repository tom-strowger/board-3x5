module.exports = {
    params: {
      designator: 'xiao-ble',
      VCC5: {type: 'net', value: 'VCC5'},
      GND: {type: 'net', value: 'GND'},
      VCC3: {type: 'net', value: 'VCC3'},
      RST: {type: 'net', value: 'RST'},
      RAW: {type: 'net', value: 'RAW'},
      NFC0: {type: 'net', value: 'NFC0'},
      NFC1: {type: 'net', value: 'NFC1'},
      CLK: {type: 'net', value: 'CLK'},
      DIO: {type: 'net', value: 'DIO'},
      P0: {type: 'net', value: 'P0'},
      P1: {type: 'net', value: 'P1'},
      P2: {type: 'net', value: 'P2'},
      P3: {type: 'net', value: 'P3'},
      P4: {type: 'net', value: 'P4'},
      P5: {type: 'net', value: 'P5'},
      P6: {type: 'net', value: 'P6'},
      P7: {type: 'net', value: 'P7'},
      P8: {type: 'net', value: 'P8'},
      P9: {type: 'net', value: 'P9'},
      P10: {type: 'net', value: 'P10'}
    },
    body: p => {
      return `
    (footprint "xiao-ble-smd-cutout" (layer "F.Cu")
        (tstamp e731e554-812f-475b-93b0-e9f8c721c2a8)
        ${p.at /* parametric position */}
        (attr through_hole)
        (fp_text reference "${p.ref}" (at -20.406 -9.144 ${p.rot + 90}) (layer "F.SilkS") ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
            (tstamp c9799749-dfc5-46b5-96e7-38214028eb92)
        )
        (fp_text value "xiao-ble-thruhole" (at -19.8434 -0.29718) (layer "F.SilkS") hide
            (effects (font (size 0.6096 0.6096) (thickness 0.0762)))
            (tstamp d811e9ac-fc59-4c9b-8d93-83a5a9c048b6)
        )
        (fp_rect (start -8.89 10.5) (end 8.89 -10.5) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 116e44aa-10c6-4541-8b90-5b7a2f5434bd))
        (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp a1111a45-eeef-42a4-8ca2-b88859685c82))
        (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp a6f271d5-ba8a-454d-80cb-5f2f863f2343))
        (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp bb88374b-bed5-4557-ac17-b524808b3664))
        (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp f5248a36-36cb-4bf1-a463-d1ff91adf3ac))
        (fp_line (start -0.8382 -8.826) (end 0.8382 -8.826) (layer "Edge.Cuts") (width 0.12) (tstamp 1988ef11-db4c-491f-b741-f1a363422b70))
        (fp_line (start -0.8382 -5.778) (end 0.8382 -5.778) (layer "Edge.Cuts") (width 0.12) (tstamp 256764a3-0621-4692-88be-5d4d134049ba))
        (fp_line (start 1.524 -6.4638) (end 1.524 -8.1402) (layer "Edge.Cuts") (width 0.12) (tstamp 674848fe-44e1-4d69-baa8-b7e6d0ba869a))
        (fp_line (start -4.0132 -2.476) (end -2.413 -2.476) (layer "Edge.Cuts") (width 0.12) (tstamp 6c8b4e74-95cf-4b77-a971-f7eb9c693851))
        (fp_line (start -2.413 -0.063) (end -4.0132 -0.063) (layer "Edge.Cuts") (width 0.12) (tstamp dcd3d65a-8cbf-4612-9c9b-1533fe023141))
        (fp_line (start -4.699 -0.7488) (end -4.699 -1.7902) (layer "Edge.Cuts") (width 0.12) (tstamp e65e60e0-c00d-4661-9543-ef9ae9cb521a))
        (fp_line (start -2.032 -2.095) (end -2.032 -0.444) (layer "Edge.Cuts") (width 0.12) (tstamp ef5f9ae2-65e0-4f15-8949-6f7c68d4ecdf))
        (fp_line (start -1.524 -6.4638) (end -1.524 -8.1402) (layer "Edge.Cuts") (width 0.12) (tstamp f58070a6-00df-4244-8883-326904a3283a))

        ${p.at /* 20/19 cutout */}
        (fp_arc (start -2.4130 -2.0950) (end -2.413 -2.4760) (angle 90) (layer "Edge.Cuts") (width 0.12) (tstamp 1d81f9ac-4484-4ebf-83e8-7de0cb40f383))
        (fp_arc (start -2.4130 -0.4440) (end -2.0320 -0.4440) (angle 90) (layer "Edge.Cuts") (width 0.12) (tstamp 43e186f4-4d59-4a50-bef4-ff753ba9e923))
        (fp_arc (start -4.4512 -2.2282) (end -4.0132 -2.4760) (angle 148.9837357) (layer "Edge.Cuts") (width 0.12) (tstamp 5c9ef830-c16f-420a-ab94-2b74b9685473))
        (fp_arc (start -4.4512 -0.3108) (end -4.6990 -0.7488) (angle 148.9837357) (layer "Edge.Cuts") (width 0.12) (tstamp 63df5c26-19a8-44c0-ad8e-16d631781e68))

        ${p.at /* 15/16/17/18 cutout */}
        (fp_arc (start -1.2762 -8.5782) (end -0.8382 -8.8260) (angle 148.9837357) (layer "Edge.Cuts") (width 0.12) (tstamp ac5c2035-56b2-4101-997b-e3c29322efa6))
        (fp_arc (start 1.2763 -8.5783) (end 1.5240 -8.1402) (angle 148.9837357) (layer "Edge.Cuts") (width 0.12) (tstamp c4632b84-988c-4e91-8e2e-6eb415743735))
        (fp_arc (start 1.2762 -6.0258) (end 0.8382 -5.7780) (angle 148.9837357) (layer "Edge.Cuts") (width 0.12) (tstamp f703e607-5685-481c-a2b2-527318a42f6d))
        (fp_arc (start -1.2762 -6.0258)  (end -1.5240 -6.4638) (angle 148.9837357) (layer "Edge.Cuts") (width 0.12) (tstamp f8070286-da49-481a-bb03-f532cdd6ecc1))

        (pad "1" thru_hole oval (at -7.62 -7.62 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp ae516570-a837-4ec7-a722-6d190e57c256) ${p.P0.str})
        (pad "2" thru_hole oval (at -7.62 -5.08 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp 2338eb22-64ca-4f30-8ba1-2f7cf75ffba1) ${p.P1.str})
        (pad "3" thru_hole oval (at -7.62 -2.54 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp 890f2928-0780-4ddd-8ccb-24fccaa5c6fc) ${p.P2.str})
        (pad "4" thru_hole oval (at -7.62 0 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp 4522c285-a407-4012-88ce-5549f5f2a2d9) ${p.P3.str})
        (pad "5" thru_hole oval (at -7.62 2.54 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp 0a4f1792-568b-402b-9700-fd4b01130ff8) ${p.P4.str})
        (pad "6" thru_hole oval (at -7.62 5.08 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp 867e444b-3681-4baf-9d08-1188c3544771) ${p.P5.str})
        (pad "7" thru_hole oval (at -7.62 7.62 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp 9c4384c0-9a57-4262-8711-eec9b8ecb4c6) ${p.P6.str})
        (pad "8" thru_hole oval (at 7.62 7.62 ${p.rot+180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp a20b891b-a240-411f-9914-9ac989f03074) ${p.P7.str})
        (pad "9" thru_hole oval (at 7.62 5.08 ${p.rot+180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp 761a1a33-98a4-41af-9660-18c12d51b442) ${p.P8.str})
        (pad "10" thru_hole oval (at 7.62 2.54 ${p.rot+180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp 2caa1d4c-02f2-443a-a145-dc5854878c73) ${p.P9.str})
        (pad "11" thru_hole oval (at 7.62 0 ${p.rot+180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp 1b7a2775-7631-4d4f-8b27-ab588adb3b7d) ${p.P10.str})
        (pad "12" thru_hole oval (at 7.62 -2.54 ${p.rot+180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp 75b890e6-df6d-4a6e-acaa-0870cda0d189) ${p.VCC3.str})
        (pad "13" thru_hole oval (at 7.62 -5.08 ${p.rot+180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp e4d9ec61-16f7-410d-891d-89481964ef82) ${p.GND.str})
        (pad "14" thru_hole oval (at 7.62 -7.62 ${p.rot+180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) (tstamp 8a11f86e-586e-495d-a11e-a1e650589934) ${p.VCC5.str})
        (pad "15" thru_hole circle (at -1.27 -8.572 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) (tstamp b370e60c-b738-4596-b4de-5ade258f269e))
        (pad "16" thru_hole circle (at 1.27 -8.572 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) (tstamp 19c0bd2b-6b0e-4d97-a0be-01d0c6efb6b0))
        (pad "17" thru_hole circle (at -1.27 -6.032 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) (tstamp 0a24ded2-bf71-4e3b-b256-1f46996c2720) ${p.RST.str})
        (pad "18" thru_hole circle (at 1.27 -6.032 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) (tstamp 5aa3a350-81ea-4759-8164-45e4cfc68b3a) ${p.GND.str})
        (pad "19" thru_hole circle (at -4.445 -0.317 180) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) (tstamp 79509df8-dd6d-474b-bcaa-263daec27871) ${p.RAW.str})
        (pad "20" thru_hole circle (at -4.445 -2.222 180) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) (tstamp 4a564fab-879b-49c4-b927-6f8f249dc7f0) ${p.GND.str})
    )
      `;
    }
  }
  
  