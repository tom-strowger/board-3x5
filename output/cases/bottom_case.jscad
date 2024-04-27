function bottom_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[186.5077434,-11.906],[233.2877434,-11.906]]).appendArc([235.2877434,-9.906],{"radius":2,"clockwise":false,"large":false}).appendPoint([235.2877434,75.2856]).appendArc([233.2877434,77.2856],{"radius":2,"clockwise":false,"large":false}).appendPoint([173.0077434,77.2856]).appendArc([171.0077434,75.2856],{"radius":2,"clockwise":false,"large":false}).appendPoint([171.0077434,66.3984]).appendArc([170.0077434,65.3984],{"radius":1,"clockwise":true,"large":false}).appendPoint([153.2477434,65.3984]).appendArc([151.2477434,63.3984],{"radius":2,"clockwise":false,"large":false}).appendPoint([151.2477434,62.436]).appendArc([150.2477434,61.436],{"radius":1,"clockwise":true,"large":false}).appendPoint([133.4877434,61.436]).appendArc([131.4877434,59.436],{"radius":2,"clockwise":false,"large":false}).appendPoint([131.4877434,0.1409691]).appendArc([131.4833371,0.0471969],{"radius":1,"clockwise":true,"large":false}).appendPoint([130.7602481,-7.6299504]).appendArc([130.3524397,-8.3451952],{"radius":1,"clockwise":true,"large":false}).appendPoint([115.0581041,-19.4571804]).appendArc([114.6156406,-22.2507848],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.260842,-38.2790296]).appendArc([129.0544467,-38.721493],{"radius":2,"clockwise":false,"large":false}).appendPoint([129.4529102,-38.4319922]).appendPoint([145.3552797,-27.0588724]).appendArc([145.6279846,-26.9212037],{"radius":1,"clockwise":true,"large":false}).appendPoint([164.1638263,-20.8985435]).appendArc([164.4728433,-20.8496],{"radius":1,"clockwise":true,"large":false}).appendPoint([183.5077434,-20.8496]).appendArc([185.5077434,-18.8496],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.5077434,-12.906]).appendArc([186.5077434,-11.906],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[-10.38,-11.906],[36.4,-11.906]]).appendArc([37.4,-12.906],{"radius":1,"clockwise":true,"large":false}).appendPoint([37.4,-18.8496]).appendArc([39.4,-20.8496],{"radius":2,"clockwise":false,"large":false}).appendPoint([58.4349001,-20.8496]).appendArc([58.7439171,-20.8985435],{"radius":1,"clockwise":true,"large":false}).appendPoint([77.7294176,-27.0673066]).appendArc([78.0081859,-27.2093461],{"radius":1,"clockwise":true,"large":false}).appendPoint([93.8532969,-38.721493]).appendArc([96.6469014,-38.2790296],{"radius":2,"clockwise":false,"large":false}).appendPoint([108.2921028,-22.2507849]).appendArc([107.8496392,-19.4571804],{"radius":2,"clockwise":false,"large":false}).appendPoint([92.5553037,-8.3451952]).appendArc([92.1474953,-7.6299504],{"radius":1,"clockwise":true,"large":false}).appendPoint([91.4244063,0.0471969]).appendArc([91.42,0.1409691],{"radius":1,"clockwise":true,"large":false}).appendPoint([91.42,59.436]).appendArc([89.42,61.436],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.66,61.436]).appendArc([71.66,62.436],{"radius":1,"clockwise":true,"large":false}).appendPoint([71.66,63.3984]).appendArc([69.66,65.3984],{"radius":2,"clockwise":false,"large":false}).appendPoint([52.9,65.3984]).appendArc([51.9,66.3984],{"radius":1,"clockwise":true,"large":false}).appendPoint([51.9,75.2856]).appendArc([49.9,77.2856],{"radius":2,"clockwise":false,"large":false}).appendPoint([-10.38,77.2856]).appendArc([-12.38,75.2856],{"radius":2,"clockwise":false,"large":false}).appendPoint([-12.38,-9.906]).appendArc([-10.38,-11.906],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D.arc({"center":[107.261854,-20.2661974],"radius":1,"startangle":53.999998,"endangle":413.999998}).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.5] });
}


function screw_bores_extrude_5_outline_fn(){
    return CAG.circle({"center":[139.7181401,-7.3852903],"radius":2.6})
.subtract(
    CAG.circle({"center":[139.7181401,-7.3852903],"radius":1.1})
).union(
    CAG.circle({"center":[173.5077434,3.9624],"radius":2.6})
.subtract(
    CAG.circle({"center":[173.5077434,3.9624],"radius":1.1})
)).union(
    CAG.circle({"center":[153.7477434,43.5864],"radius":2.6})
.subtract(
    CAG.circle({"center":[153.7477434,43.5864],"radius":1.1})
)).union(
    CAG.circle({"center":[213.0277434,9.906],"radius":2.6})
.subtract(
    CAG.circle({"center":[213.0277434,9.906],"radius":1.1})
)).union(
    CAG.circle({"center":[213.0277434,49.53],"radius":2.6})
.subtract(
    CAG.circle({"center":[213.0277434,49.53],"radius":1.1})
)).union(
    CAG.circle({"center":[83.1896033,-7.3852903],"radius":2.6})
.subtract(
    CAG.circle({"center":[83.1896033,-7.3852903],"radius":1.1})
)).union(
    CAG.circle({"center":[49.4,3.9624],"radius":2.6})
.subtract(
    CAG.circle({"center":[49.4,3.9624],"radius":1.1})
)).union(
    CAG.circle({"center":[69.16,43.5864],"radius":2.6})
.subtract(
    CAG.circle({"center":[69.16,43.5864],"radius":1.1})
)).union(
    CAG.circle({"center":[9.88,9.906],"radius":2.6})
.subtract(
    CAG.circle({"center":[9.88,9.906],"radius":1.1})
)).union(
    CAG.circle({"center":[9.88,49.53],"radius":2.6})
.subtract(
    CAG.circle({"center":[9.88,49.53],"radius":1.1})
)).extrude({ offset: [0, 0, 5] });
}


function walls_extrude_10_1_outline_fn(){
    return new CSG.Path2D([[186.5077434,-11.906],[233.2877434,-11.906]]).appendArc([235.2877434,-9.906],{"radius":2,"clockwise":false,"large":false}).appendPoint([235.2877434,75.2856]).appendArc([233.2877434,77.2856],{"radius":2,"clockwise":false,"large":false}).appendPoint([173.0077434,77.2856]).appendArc([171.0077434,75.2856],{"radius":2,"clockwise":false,"large":false}).appendPoint([171.0077434,66.3984]).appendArc([170.0077434,65.3984],{"radius":1,"clockwise":true,"large":false}).appendPoint([153.2477434,65.3984]).appendArc([151.2477434,63.3984],{"radius":2,"clockwise":false,"large":false}).appendPoint([151.2477434,62.436]).appendArc([150.2477434,61.436],{"radius":1,"clockwise":true,"large":false}).appendPoint([133.4877434,61.436]).appendArc([131.4877434,59.436],{"radius":2,"clockwise":false,"large":false}).appendPoint([131.4877434,0.1409691]).appendArc([131.4833371,0.0471969],{"radius":1,"clockwise":true,"large":false}).appendPoint([130.7602481,-7.6299504]).appendArc([130.3524397,-8.3451952],{"radius":1,"clockwise":true,"large":false}).appendPoint([115.0581041,-19.4571804]).appendArc([114.6156406,-22.2507848],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.260842,-38.2790296]).appendArc([129.0544467,-38.721493],{"radius":2,"clockwise":false,"large":false}).appendPoint([129.4529102,-38.4319922]).appendPoint([145.3552797,-27.0588724]).appendArc([145.6279846,-26.9212037],{"radius":1,"clockwise":true,"large":false}).appendPoint([164.1638263,-20.8985435]).appendArc([164.4728433,-20.8496],{"radius":1,"clockwise":true,"large":false}).appendPoint([183.5077434,-20.8496]).appendArc([185.5077434,-18.8496],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.5077434,-12.906]).appendArc([186.5077434,-11.906],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[185.0077434,-10.406],[233.2877434,-10.406]]).appendArc([233.7877434,-9.906],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([233.7877434,75.2856]).appendArc([233.2877434,75.7856],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([173.0077434,75.7856]).appendArc([172.5077434,75.2856],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([172.5077434,64.8984]).appendArc([171.5077434,63.8984],{"radius":1,"clockwise":true,"large":false}).appendPoint([153.2477434,63.8984]).appendArc([152.7477434,63.3984],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([152.7477434,60.936]).appendArc([151.7477434,59.936],{"radius":1,"clockwise":true,"large":false}).appendPoint([133.4877434,59.936]).appendArc([132.9877434,59.436],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([132.9877434,0.0704842]).appendArc([132.9833371,-0.023288],{"radius":1,"clockwise":true,"large":false}).appendPoint([132.1901003,-8.4452039]).appendArc([131.7822919,-9.1604487],{"radius":1,"clockwise":true,"large":false}).appendPoint([115.939782,-20.6707059]).appendArc([115.8291661,-21.369107],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.4743675,-37.3973517]).appendArc([128.1727687,-37.5079676],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.5757713,-37.215169]).appendPoint([144.6712676,-25.703928]).appendArc([144.9439725,-25.5662593],{"radius":1,"clockwise":true,"large":false}).appendPoint([163.9918907,-19.3772154]).appendArc([164.0595849,-19.3496],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([183.5077434,-19.3496]).appendArc([184.0077434,-18.8496],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([184.0077434,-11.406]).appendArc([185.0077434,-10.406],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-10.38,-11.906],[36.4,-11.906]]).appendArc([37.4,-12.906],{"radius":1,"clockwise":true,"large":false}).appendPoint([37.4,-18.8496]).appendArc([39.4,-20.8496],{"radius":2,"clockwise":false,"large":false}).appendPoint([58.4349001,-20.8496]).appendArc([58.7439171,-20.8985435],{"radius":1,"clockwise":true,"large":false}).appendPoint([77.7294176,-27.0673066]).appendArc([78.0081859,-27.2093461],{"radius":1,"clockwise":true,"large":false}).appendPoint([93.8532969,-38.721493]).appendArc([96.6469014,-38.2790296],{"radius":2,"clockwise":false,"large":false}).appendPoint([108.2921028,-22.2507849]).appendArc([107.8496392,-19.4571804],{"radius":2,"clockwise":false,"large":false}).appendPoint([92.5553037,-8.3451952]).appendArc([92.1474953,-7.6299504],{"radius":1,"clockwise":true,"large":false}).appendPoint([91.4244063,0.0471969]).appendArc([91.42,0.1409691],{"radius":1,"clockwise":true,"large":false}).appendPoint([91.42,59.436]).appendArc([89.42,61.436],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.66,61.436]).appendArc([71.66,62.436],{"radius":1,"clockwise":true,"large":false}).appendPoint([71.66,63.3984]).appendArc([69.66,65.3984],{"radius":2,"clockwise":false,"large":false}).appendPoint([52.9,65.3984]).appendArc([51.9,66.3984],{"radius":1,"clockwise":true,"large":false}).appendPoint([51.9,75.2856]).appendArc([49.9,77.2856],{"radius":2,"clockwise":false,"large":false}).appendPoint([-10.38,77.2856]).appendArc([-12.38,75.2856],{"radius":2,"clockwise":false,"large":false}).appendPoint([-12.38,-9.906]).appendArc([-10.38,-11.906],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[-10.38,-10.406],[37.9,-10.406]]).appendArc([38.9,-11.406],{"radius":1,"clockwise":true,"large":false}).appendPoint([38.9,-18.8496]).appendArc([39.4,-19.3496],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([58.8481585,-19.3496]).appendArc([58.9158527,-19.3772154],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([78.418892,-25.714137]).appendArc([78.6976603,-25.8561765],{"radius":1,"clockwise":true,"large":false}).appendPoint([94.7349748,-37.5079676]).appendArc([95.4333759,-37.3973517],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([107.0785773,-21.369107]).appendArc([106.9679614,-20.6707059],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([91.1254515,-9.1604487]).appendArc([90.7176431,-8.4452039],{"radius":1,"clockwise":true,"large":false}).appendPoint([89.9244063,-0.023288]).appendArc([89.92,0.0704842],{"radius":1,"clockwise":true,"large":false}).appendPoint([89.92,59.436]).appendArc([89.42,59.936],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71.16,59.936]).appendArc([70.16,60.936],{"radius":1,"clockwise":true,"large":false}).appendPoint([70.16,63.3984]).appendArc([69.66,63.8984],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([51.4,63.8984]).appendArc([50.4,64.8984],{"radius":1,"clockwise":true,"large":false}).appendPoint([50.4,75.2856]).appendArc([49.9,75.7856],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([-10.38,75.7856]).appendArc([-10.88,75.2856],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([-10.88,-9.906]).appendArc([-10.38,-10.406],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
)).union(
    new CSG.Path2D.arc({"center":[107.261854,-20.2661974],"radius":1,"startangle":53.999998,"endangle":413.999998}).close().innerToCAG()
).extrude({ offset: [0, 0, 10.1] });
}


function screw_head_inserts_extrude_1_3_outline_fn(){
    return CAG.circle({"center":[139.7181401,-7.3852903],"radius":1.8})
.union(
    CAG.circle({"center":[173.5077434,3.9624],"radius":1.8})
).union(
    CAG.circle({"center":[153.7477434,43.5864],"radius":1.8})
).union(
    CAG.circle({"center":[213.0277434,9.906],"radius":1.8})
).union(
    CAG.circle({"center":[213.0277434,49.53],"radius":1.8})
).union(
    CAG.circle({"center":[83.1896033,-7.3852903],"radius":1.8})
).union(
    CAG.circle({"center":[49.4,3.9624],"radius":1.8})
).union(
    CAG.circle({"center":[69.16,43.5864],"radius":1.8})
).union(
    CAG.circle({"center":[9.88,9.906],"radius":1.8})
).union(
    CAG.circle({"center":[9.88,49.53],"radius":1.8})
).extrude({ offset: [0, 0, 1.3] });
}


function _l_screws_inner_extrude_1_5_outline_fn(){
    return CAG.circle({"center":[83.1896033,-7.3852903],"radius":1.1})
.union(
    CAG.circle({"center":[49.4,3.9624],"radius":1.1})
).union(
    CAG.circle({"center":[69.16,43.5864],"radius":1.1})
).union(
    CAG.circle({"center":[9.88,9.906],"radius":1.1})
).union(
    CAG.circle({"center":[9.88,49.53],"radius":1.1})
).extrude({ offset: [0, 0, 1.5] });
}


function _r_screws_inner_extrude_1_5_outline_fn(){
    return CAG.circle({"center":[139.7181401,-7.3852903],"radius":1.1})
.union(
    CAG.circle({"center":[173.5077434,3.9624],"radius":1.1})
).union(
    CAG.circle({"center":[153.7477434,43.5864],"radius":1.1})
).union(
    CAG.circle({"center":[213.0277434,9.906],"radius":1.1})
).union(
    CAG.circle({"center":[213.0277434,49.53],"radius":1.1})
).extrude({ offset: [0, 0, 1.5] });
}


function l_usb_conn_extrude_3_outline_fn(){
    return new CSG.Path2D([[-4.84,97.536],[-4.84,67.436]]).appendPoint([5.16,67.436]).appendPoint([5.16,97.536]).appendPoint([-4.84,97.536]).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function l_switch_extrude_3_outline_fn(){
    return new CSG.Path2D([[14.76,97.536],[14.76,59.436]]).appendPoint([24.76,59.436]).appendPoint([24.76,97.536]).appendPoint([14.76,97.536]).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function r_usb_conn_extrude_3_outline_fn(){
    return new CSG.Path2D([[227.7477434,97.536],[227.7477434,67.436]]).appendPoint([217.7477434,67.436]).appendPoint([217.7477434,97.536]).appendPoint([227.7477434,97.536]).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function r_switch_extrude_3_outline_fn(){
    return new CSG.Path2D([[208.1477434,97.536],[208.1477434,59.436]]).appendPoint([198.1477434,59.436]).appendPoint([198.1477434,97.536]).appendPoint([208.1477434,97.536]).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function feet_rings_extrude_0_5_outline_fn(){
    return CAG.circle({"center":[222.9077434,65.3796],"radius":4.5})
.subtract(
    CAG.circle({"center":[222.9077434,65.3796],"radius":4})
).union(
    CAG.circle({"center":[143.8677434,49.53],"radius":4.5})
.subtract(
    CAG.circle({"center":[143.8677434,49.53],"radius":4})
)).union(
    CAG.circle({"center":[130.4538717,-22.9881258],"radius":4.5})
.subtract(
    CAG.circle({"center":[130.4538717,-22.9881258],"radius":4})
)).union(
    CAG.circle({"center":[222.9077434,0],"radius":4.5})
.subtract(
    CAG.circle({"center":[222.9077434,0],"radius":4})
)).union(
    CAG.circle({"center":[0,65.3796],"radius":4.5})
.subtract(
    CAG.circle({"center":[0,65.3796],"radius":4})
)).union(
    CAG.circle({"center":[79.04,49.53],"radius":4.5})
.subtract(
    CAG.circle({"center":[79.04,49.53],"radius":4})
)).union(
    CAG.circle({"center":[92.4538717,-22.9881258],"radius":4.5})
.subtract(
    CAG.circle({"center":[92.4538717,-22.9881258],"radius":4})
)).union(
    CAG.circle({"center":[0,0],"radius":4.5})
.subtract(
    CAG.circle({"center":[0,0],"radius":4})
)).extrude({ offset: [0, 0, 0.5] });
}


function batter_border_extrude_2_5_outline_fn(){
    return new CSG.Path2D([[9.7,-7],[39.7,-7]]).appendArc([40.7,-6],{"radius":1,"clockwise":false,"large":false}).appendPoint([40.7,6]).appendArc([39.7,7],{"radius":1,"clockwise":false,"large":false}).appendPoint([9.7,7]).appendArc([8.7,6],{"radius":1,"clockwise":false,"large":false}).appendPoint([8.7,-6]).appendArc([9.7,-7],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[9.7,-6],[39.7,-6]]).appendPoint([39.7,6]).appendPoint([9.7,6]).appendPoint([9.7,-6]).close().innerToCAG()
).extrude({ offset: [0, 0, 2.5] });
}




                function bottom_case_case_fn() {
                    

                // creating part 0 of case bottom_case
                let bottom_case__part_0 = bottom_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_0_bounds = bottom_case__part_0.getBounds();
                let bottom_case__part_0_x = bottom_case__part_0_bounds[0].x + (bottom_case__part_0_bounds[1].x - bottom_case__part_0_bounds[0].x) / 2
                let bottom_case__part_0_y = bottom_case__part_0_bounds[0].y + (bottom_case__part_0_bounds[1].y - bottom_case__part_0_bounds[0].y) / 2
                bottom_case__part_0 = translate([-bottom_case__part_0_x, -bottom_case__part_0_y, 0], bottom_case__part_0);
                bottom_case__part_0 = rotate([0,0,0], bottom_case__part_0);
                bottom_case__part_0 = translate([bottom_case__part_0_x, bottom_case__part_0_y, 0], bottom_case__part_0);

                bottom_case__part_0 = translate([0,0,0], bottom_case__part_0);
                let result = bottom_case__part_0;
                
            

                // creating part 1 of case bottom_case
                let bottom_case__part_1 = screw_bores_extrude_5_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_1_bounds = bottom_case__part_1.getBounds();
                let bottom_case__part_1_x = bottom_case__part_1_bounds[0].x + (bottom_case__part_1_bounds[1].x - bottom_case__part_1_bounds[0].x) / 2
                let bottom_case__part_1_y = bottom_case__part_1_bounds[0].y + (bottom_case__part_1_bounds[1].y - bottom_case__part_1_bounds[0].y) / 2
                bottom_case__part_1 = translate([-bottom_case__part_1_x, -bottom_case__part_1_y, 0], bottom_case__part_1);
                bottom_case__part_1 = rotate([0,0,0], bottom_case__part_1);
                bottom_case__part_1 = translate([bottom_case__part_1_x, bottom_case__part_1_y, 0], bottom_case__part_1);

                bottom_case__part_1 = translate([0,0,0], bottom_case__part_1);
                result = result.union(bottom_case__part_1);
                
            

                // creating part 2 of case bottom_case
                let bottom_case__part_2 = walls_extrude_10_1_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_2_bounds = bottom_case__part_2.getBounds();
                let bottom_case__part_2_x = bottom_case__part_2_bounds[0].x + (bottom_case__part_2_bounds[1].x - bottom_case__part_2_bounds[0].x) / 2
                let bottom_case__part_2_y = bottom_case__part_2_bounds[0].y + (bottom_case__part_2_bounds[1].y - bottom_case__part_2_bounds[0].y) / 2
                bottom_case__part_2 = translate([-bottom_case__part_2_x, -bottom_case__part_2_y, 0], bottom_case__part_2);
                bottom_case__part_2 = rotate([0,0,0], bottom_case__part_2);
                bottom_case__part_2 = translate([bottom_case__part_2_x, bottom_case__part_2_y, 0], bottom_case__part_2);

                bottom_case__part_2 = translate([0,0,0], bottom_case__part_2);
                result = result.union(bottom_case__part_2);
                
            

                // creating part 3 of case bottom_case
                let bottom_case__part_3 = screw_head_inserts_extrude_1_3_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_3_bounds = bottom_case__part_3.getBounds();
                let bottom_case__part_3_x = bottom_case__part_3_bounds[0].x + (bottom_case__part_3_bounds[1].x - bottom_case__part_3_bounds[0].x) / 2
                let bottom_case__part_3_y = bottom_case__part_3_bounds[0].y + (bottom_case__part_3_bounds[1].y - bottom_case__part_3_bounds[0].y) / 2
                bottom_case__part_3 = translate([-bottom_case__part_3_x, -bottom_case__part_3_y, 0], bottom_case__part_3);
                bottom_case__part_3 = rotate([0,0,0], bottom_case__part_3);
                bottom_case__part_3 = translate([bottom_case__part_3_x, bottom_case__part_3_y, 0], bottom_case__part_3);

                bottom_case__part_3 = translate([0,0,0], bottom_case__part_3);
                result = result.subtract(bottom_case__part_3);
                
            

                // creating part 4 of case bottom_case
                let bottom_case__part_4 = _l_screws_inner_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_4_bounds = bottom_case__part_4.getBounds();
                let bottom_case__part_4_x = bottom_case__part_4_bounds[0].x + (bottom_case__part_4_bounds[1].x - bottom_case__part_4_bounds[0].x) / 2
                let bottom_case__part_4_y = bottom_case__part_4_bounds[0].y + (bottom_case__part_4_bounds[1].y - bottom_case__part_4_bounds[0].y) / 2
                bottom_case__part_4 = translate([-bottom_case__part_4_x, -bottom_case__part_4_y, 0], bottom_case__part_4);
                bottom_case__part_4 = rotate([0,0,0], bottom_case__part_4);
                bottom_case__part_4 = translate([bottom_case__part_4_x, bottom_case__part_4_y, 0], bottom_case__part_4);

                bottom_case__part_4 = translate([0,0,0], bottom_case__part_4);
                result = result.subtract(bottom_case__part_4);
                
            

                // creating part 5 of case bottom_case
                let bottom_case__part_5 = _r_screws_inner_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_5_bounds = bottom_case__part_5.getBounds();
                let bottom_case__part_5_x = bottom_case__part_5_bounds[0].x + (bottom_case__part_5_bounds[1].x - bottom_case__part_5_bounds[0].x) / 2
                let bottom_case__part_5_y = bottom_case__part_5_bounds[0].y + (bottom_case__part_5_bounds[1].y - bottom_case__part_5_bounds[0].y) / 2
                bottom_case__part_5 = translate([-bottom_case__part_5_x, -bottom_case__part_5_y, 0], bottom_case__part_5);
                bottom_case__part_5 = rotate([0,0,0], bottom_case__part_5);
                bottom_case__part_5 = translate([bottom_case__part_5_x, bottom_case__part_5_y, 0], bottom_case__part_5);

                bottom_case__part_5 = translate([0,0,0], bottom_case__part_5);
                result = result.subtract(bottom_case__part_5);
                
            

                // creating part 6 of case bottom_case
                let bottom_case__part_6 = l_usb_conn_extrude_3_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_6_bounds = bottom_case__part_6.getBounds();
                let bottom_case__part_6_x = bottom_case__part_6_bounds[0].x + (bottom_case__part_6_bounds[1].x - bottom_case__part_6_bounds[0].x) / 2
                let bottom_case__part_6_y = bottom_case__part_6_bounds[0].y + (bottom_case__part_6_bounds[1].y - bottom_case__part_6_bounds[0].y) / 2
                bottom_case__part_6 = translate([-bottom_case__part_6_x, -bottom_case__part_6_y, 0], bottom_case__part_6);
                bottom_case__part_6 = rotate([0,0,0], bottom_case__part_6);
                bottom_case__part_6 = translate([bottom_case__part_6_x, bottom_case__part_6_y, 0], bottom_case__part_6);

                bottom_case__part_6 = translate([0,0,8.1], bottom_case__part_6);
                result = result.subtract(bottom_case__part_6);
                
            

                // creating part 7 of case bottom_case
                let bottom_case__part_7 = l_switch_extrude_3_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_7_bounds = bottom_case__part_7.getBounds();
                let bottom_case__part_7_x = bottom_case__part_7_bounds[0].x + (bottom_case__part_7_bounds[1].x - bottom_case__part_7_bounds[0].x) / 2
                let bottom_case__part_7_y = bottom_case__part_7_bounds[0].y + (bottom_case__part_7_bounds[1].y - bottom_case__part_7_bounds[0].y) / 2
                bottom_case__part_7 = translate([-bottom_case__part_7_x, -bottom_case__part_7_y, 0], bottom_case__part_7);
                bottom_case__part_7 = rotate([0,0,0], bottom_case__part_7);
                bottom_case__part_7 = translate([bottom_case__part_7_x, bottom_case__part_7_y, 0], bottom_case__part_7);

                bottom_case__part_7 = translate([0,0,5.175], bottom_case__part_7);
                result = result.subtract(bottom_case__part_7);
                
            

                // creating part 8 of case bottom_case
                let bottom_case__part_8 = r_usb_conn_extrude_3_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_8_bounds = bottom_case__part_8.getBounds();
                let bottom_case__part_8_x = bottom_case__part_8_bounds[0].x + (bottom_case__part_8_bounds[1].x - bottom_case__part_8_bounds[0].x) / 2
                let bottom_case__part_8_y = bottom_case__part_8_bounds[0].y + (bottom_case__part_8_bounds[1].y - bottom_case__part_8_bounds[0].y) / 2
                bottom_case__part_8 = translate([-bottom_case__part_8_x, -bottom_case__part_8_y, 0], bottom_case__part_8);
                bottom_case__part_8 = rotate([0,0,0], bottom_case__part_8);
                bottom_case__part_8 = translate([bottom_case__part_8_x, bottom_case__part_8_y, 0], bottom_case__part_8);

                bottom_case__part_8 = translate([0,0,8.1], bottom_case__part_8);
                result = result.subtract(bottom_case__part_8);
                
            

                // creating part 9 of case bottom_case
                let bottom_case__part_9 = r_switch_extrude_3_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_9_bounds = bottom_case__part_9.getBounds();
                let bottom_case__part_9_x = bottom_case__part_9_bounds[0].x + (bottom_case__part_9_bounds[1].x - bottom_case__part_9_bounds[0].x) / 2
                let bottom_case__part_9_y = bottom_case__part_9_bounds[0].y + (bottom_case__part_9_bounds[1].y - bottom_case__part_9_bounds[0].y) / 2
                bottom_case__part_9 = translate([-bottom_case__part_9_x, -bottom_case__part_9_y, 0], bottom_case__part_9);
                bottom_case__part_9 = rotate([0,0,0], bottom_case__part_9);
                bottom_case__part_9 = translate([bottom_case__part_9_x, bottom_case__part_9_y, 0], bottom_case__part_9);

                bottom_case__part_9 = translate([0,0,5.175], bottom_case__part_9);
                result = result.subtract(bottom_case__part_9);
                
            

                // creating part 10 of case bottom_case
                let bottom_case__part_10 = feet_rings_extrude_0_5_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_10_bounds = bottom_case__part_10.getBounds();
                let bottom_case__part_10_x = bottom_case__part_10_bounds[0].x + (bottom_case__part_10_bounds[1].x - bottom_case__part_10_bounds[0].x) / 2
                let bottom_case__part_10_y = bottom_case__part_10_bounds[0].y + (bottom_case__part_10_bounds[1].y - bottom_case__part_10_bounds[0].y) / 2
                bottom_case__part_10 = translate([-bottom_case__part_10_x, -bottom_case__part_10_y, 0], bottom_case__part_10);
                bottom_case__part_10 = rotate([0,0,0], bottom_case__part_10);
                bottom_case__part_10 = translate([bottom_case__part_10_x, bottom_case__part_10_y, 0], bottom_case__part_10);

                bottom_case__part_10 = translate([0,0,-0.5], bottom_case__part_10);
                result = result.union(bottom_case__part_10);
                
            

                // creating part 11 of case bottom_case
                let bottom_case__part_11 = batter_border_extrude_2_5_outline_fn();

                // make sure that rotations are relative
                let bottom_case__part_11_bounds = bottom_case__part_11.getBounds();
                let bottom_case__part_11_x = bottom_case__part_11_bounds[0].x + (bottom_case__part_11_bounds[1].x - bottom_case__part_11_bounds[0].x) / 2
                let bottom_case__part_11_y = bottom_case__part_11_bounds[0].y + (bottom_case__part_11_bounds[1].y - bottom_case__part_11_bounds[0].y) / 2
                bottom_case__part_11 = translate([-bottom_case__part_11_x, -bottom_case__part_11_y, 0], bottom_case__part_11);
                bottom_case__part_11 = rotate([0,0,0], bottom_case__part_11);
                bottom_case__part_11 = translate([bottom_case__part_11_x, bottom_case__part_11_y, 0], bottom_case__part_11);

                bottom_case__part_11 = translate([0,0,0], bottom_case__part_11);
                result = result.union(bottom_case__part_11);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_case_fn();
            }

        