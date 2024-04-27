function top_plate_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[186.5077434,-11.906],[233.2877434,-11.906]]).appendArc([235.2877434,-9.906],{"radius":2,"clockwise":false,"large":false}).appendPoint([235.2877434,75.2856]).appendArc([233.2877434,77.2856],{"radius":2,"clockwise":false,"large":false}).appendPoint([173.0077434,77.2856]).appendArc([171.0077434,75.2856],{"radius":2,"clockwise":false,"large":false}).appendPoint([171.0077434,66.3984]).appendArc([170.0077434,65.3984],{"radius":1,"clockwise":true,"large":false}).appendPoint([153.2477434,65.3984]).appendArc([151.2477434,63.3984],{"radius":2,"clockwise":false,"large":false}).appendPoint([151.2477434,62.436]).appendArc([150.2477434,61.436],{"radius":1,"clockwise":true,"large":false}).appendPoint([133.4877434,61.436]).appendArc([131.4877434,59.436],{"radius":2,"clockwise":false,"large":false}).appendPoint([131.4877434,0.1409695]).appendArc([131.4833371,0.0471973],{"radius":1,"clockwise":true,"large":false}).appendPoint([130.760248,-7.6299504]).appendArc([130.3524396,-8.3451952],{"radius":1,"clockwise":true,"large":false}).appendPoint([115.0581041,-19.4571804]).appendArc([114.6156406,-22.2507849],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.260842,-38.2790296]).appendArc([129.0544467,-38.721493],{"radius":2,"clockwise":false,"large":false}).appendPoint([129.4529127,-38.4319905]).appendPoint([145.3552801,-27.0588721]).appendArc([145.627985,-26.9212034],{"radius":1,"clockwise":true,"large":false}).appendPoint([164.163826,-20.8985435]).appendArc([164.472843,-20.8496],{"radius":1,"clockwise":true,"large":false}).appendPoint([183.5077434,-20.8496]).appendArc([185.5077434,-18.8496],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.5077434,-12.906]).appendArc([186.5077434,-11.906],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[128.9052495,-32.7657415],[140.2314874,-24.536748]]).appendPoint([132.0024939,-13.2105101]).appendPoint([120.676256,-21.4395036]).appendPoint([128.9052495,-32.7657415]).close().innerToCAG()
.union(
    new CSG.Path2D([[166.1277434,-15.9436],[180.1277434,-15.9436]]).appendPoint([180.1277434,-1.9436]).appendPoint([166.1277434,-1.9436]).appendPoint([166.1277434,-15.9436]).close().innerToCAG()
).union(
    new CSG.Path2D([[136.8677434,42.53],[150.8677434,42.53]]).appendPoint([150.8677434,56.53]).appendPoint([136.8677434,56.53]).appendPoint([136.8677434,42.53]).close().innerToCAG()
).union(
    new CSG.Path2D([[136.8677434,22.718],[150.8677434,22.718]]).appendPoint([150.8677434,36.718]).appendPoint([136.8677434,36.718]).appendPoint([136.8677434,22.718]).close().innerToCAG()
).union(
    new CSG.Path2D([[136.8677434,2.906],[150.8677434,2.906]]).appendPoint([150.8677434,16.906]).appendPoint([136.8677434,16.906]).appendPoint([136.8677434,2.906]).close().innerToCAG()
).union(
    new CSG.Path2D([[156.6277434,46.4924],[170.6277434,46.4924]]).appendPoint([170.6277434,60.4924]).appendPoint([156.6277434,60.4924]).appendPoint([156.6277434,46.4924]).close().innerToCAG()
).union(
    new CSG.Path2D([[156.6277434,26.6804],[170.6277434,26.6804]]).appendPoint([170.6277434,40.6804]).appendPoint([156.6277434,40.6804]).appendPoint([156.6277434,26.6804]).close().innerToCAG()
).union(
    new CSG.Path2D([[156.6277434,6.8684],[170.6277434,6.8684]]).appendPoint([170.6277434,20.8684]).appendPoint([156.6277434,20.8684]).appendPoint([156.6277434,6.8684]).close().innerToCAG()
).union(
    new CSG.Path2D([[176.3877434,58.3796],[190.3877434,58.3796]]).appendPoint([190.3877434,72.3796]).appendPoint([176.3877434,72.3796]).appendPoint([176.3877434,58.3796]).close().innerToCAG()
).union(
    new CSG.Path2D([[176.3877434,38.5676],[190.3877434,38.5676]]).appendPoint([190.3877434,52.5676]).appendPoint([176.3877434,52.5676]).appendPoint([176.3877434,38.5676]).close().innerToCAG()
).union(
    new CSG.Path2D([[176.3877434,18.7556],[190.3877434,18.7556]]).appendPoint([190.3877434,32.7556]).appendPoint([176.3877434,32.7556]).appendPoint([176.3877434,18.7556]).close().innerToCAG()
).union(
    new CSG.Path2D([[196.1477434,52.436],[210.1477434,52.436]]).appendPoint([210.1477434,66.436]).appendPoint([196.1477434,66.436]).appendPoint([196.1477434,52.436]).close().innerToCAG()
).union(
    new CSG.Path2D([[196.1477434,32.624],[210.1477434,32.624]]).appendPoint([210.1477434,46.624]).appendPoint([196.1477434,46.624]).appendPoint([196.1477434,32.624]).close().innerToCAG()
).union(
    new CSG.Path2D([[196.1477434,12.812],[210.1477434,12.812]]).appendPoint([210.1477434,26.812]).appendPoint([196.1477434,26.812]).appendPoint([196.1477434,12.812]).close().innerToCAG()
).union(
    new CSG.Path2D([[215.9077434,32.624],[229.9077434,32.624]]).appendPoint([229.9077434,46.624]).appendPoint([215.9077434,46.624]).appendPoint([215.9077434,32.624]).close().innerToCAG()
).union(
    new CSG.Path2D([[215.9077434,12.812],[229.9077434,12.812]]).appendPoint([229.9077434,26.812]).appendPoint([215.9077434,26.812]).appendPoint([215.9077434,12.812]).close().innerToCAG()
).union(
    new CSG.Path2D([[215.9077434,-7],[229.9077434,-7]]).appendPoint([229.9077434,7]).appendPoint([215.9077434,7]).appendPoint([215.9077434,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.4100165,-21.5086323],[159.7248078,-17.1823944]]).appendPoint([155.3985699,-3.8676031]).appendPoint([142.0837786,-8.193841]).appendPoint([146.4100165,-21.5086323]).close().innerToCAG()
)).union(
    new CSG.Path2D([[-10.38,-11.906],[36.4,-11.906]]).appendArc([37.4,-12.906],{"radius":1,"clockwise":true,"large":false}).appendPoint([37.4,-18.8496]).appendArc([39.4,-20.8496],{"radius":2,"clockwise":false,"large":false}).appendPoint([58.4349004,-20.8496]).appendArc([58.7439174,-20.8985435],{"radius":1,"clockwise":true,"large":false}).appendPoint([77.7294177,-27.0673066]).appendArc([78.008186,-27.2093461],{"radius":1,"clockwise":true,"large":false}).appendPoint([93.8532969,-38.7214931]).appendArc([96.6469014,-38.2790296],{"radius":2,"clockwise":false,"large":false}).appendPoint([108.2921028,-22.2507849]).appendArc([107.8496393,-19.4571804],{"radius":2,"clockwise":false,"large":false}).appendPoint([92.5553038,-8.3451952]).appendArc([92.1474954,-7.6299504],{"radius":1,"clockwise":true,"large":false}).appendPoint([91.4244063,0.0471973]).appendArc([91.42,0.1409695],{"radius":1,"clockwise":true,"large":false}).appendPoint([91.42,59.436]).appendArc([89.42,61.436],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.66,61.436]).appendArc([71.66,62.436],{"radius":1,"clockwise":true,"large":false}).appendPoint([71.66,63.3984]).appendArc([69.66,65.3984],{"radius":2,"clockwise":false,"large":false}).appendPoint([52.9,65.3984]).appendArc([51.9,66.3984],{"radius":1,"clockwise":true,"large":false}).appendPoint([51.9,75.2856]).appendArc([49.9,77.2856],{"radius":2,"clockwise":false,"large":false}).appendPoint([-10.38,77.2856]).appendArc([-12.38,75.2856],{"radius":2,"clockwise":false,"large":false}).appendPoint([-12.38,-9.906]).appendArc([-10.38,-11.906],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[82.676256,-24.536748],[94.0024939,-32.7657415]]).appendPoint([102.2314874,-21.4395036]).appendPoint([90.9052495,-13.2105101]).appendPoint([82.676256,-24.536748]).close().innerToCAG()
.union(
    new CSG.Path2D([[42.78,-15.9436],[56.78,-15.9436]]).appendPoint([56.78,-1.9436]).appendPoint([42.78,-1.9436]).appendPoint([42.78,-15.9436]).close().innerToCAG()
).union(
    new CSG.Path2D([[72.04,42.53],[86.04,42.53]]).appendPoint([86.04,56.53]).appendPoint([72.04,56.53]).appendPoint([72.04,42.53]).close().innerToCAG()
).union(
    new CSG.Path2D([[72.04,22.718],[86.04,22.718]]).appendPoint([86.04,36.718]).appendPoint([72.04,36.718]).appendPoint([72.04,22.718]).close().innerToCAG()
).union(
    new CSG.Path2D([[72.04,2.906],[86.04,2.906]]).appendPoint([86.04,16.906]).appendPoint([72.04,16.906]).appendPoint([72.04,2.906]).close().innerToCAG()
).union(
    new CSG.Path2D([[52.28,46.4924],[66.28,46.4924]]).appendPoint([66.28,60.4924]).appendPoint([52.28,60.4924]).appendPoint([52.28,46.4924]).close().innerToCAG()
).union(
    new CSG.Path2D([[52.28,26.6804],[66.28,26.6804]]).appendPoint([66.28,40.6804]).appendPoint([52.28,40.6804]).appendPoint([52.28,26.6804]).close().innerToCAG()
).union(
    new CSG.Path2D([[52.28,6.8684],[66.28,6.8684]]).appendPoint([66.28,20.8684]).appendPoint([52.28,20.8684]).appendPoint([52.28,6.8684]).close().innerToCAG()
).union(
    new CSG.Path2D([[32.52,58.3796],[46.52,58.3796]]).appendPoint([46.52,72.3796]).appendPoint([32.52,72.3796]).appendPoint([32.52,58.3796]).close().innerToCAG()
).union(
    new CSG.Path2D([[32.52,38.5676],[46.52,38.5676]]).appendPoint([46.52,52.5676]).appendPoint([32.52,52.5676]).appendPoint([32.52,38.5676]).close().innerToCAG()
).union(
    new CSG.Path2D([[32.52,18.7556],[46.52,18.7556]]).appendPoint([46.52,32.7556]).appendPoint([32.52,32.7556]).appendPoint([32.52,18.7556]).close().innerToCAG()
).union(
    new CSG.Path2D([[12.76,52.436],[26.76,52.436]]).appendPoint([26.76,66.436]).appendPoint([12.76,66.436]).appendPoint([12.76,52.436]).close().innerToCAG()
).union(
    new CSG.Path2D([[12.76,32.624],[26.76,32.624]]).appendPoint([26.76,46.624]).appendPoint([12.76,46.624]).appendPoint([12.76,32.624]).close().innerToCAG()
).union(
    new CSG.Path2D([[12.76,12.812],[26.76,12.812]]).appendPoint([26.76,26.812]).appendPoint([12.76,26.812]).appendPoint([12.76,12.812]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,32.624],[7,32.624]]).appendPoint([7,46.624]).appendPoint([-7,46.624]).appendPoint([-7,32.624]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,12.812],[7,12.812]]).appendPoint([7,26.812]).appendPoint([-7,26.812]).appendPoint([-7,12.812]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,-7],[7,-7]]).appendPoint([7,7]).appendPoint([-7,7]).appendPoint([-7,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[63.1829356,-17.1823944],[76.4977269,-21.5086323]]).appendPoint([80.8239648,-8.193841]).appendPoint([67.5091735,-3.8676031]).appendPoint([63.1829356,-17.1823944]).close().innerToCAG()
))).extrude({ offset: [0, 0, 1.5] });
}


function heat_set_bores_extrude_3_5_outline_fn(){
    return CAG.circle({"center":[139.7181401,-7.3852903],"radius":2.5})
.subtract(
    CAG.circle({"center":[139.7181401,-7.3852903],"radius":1.5})
).union(
    CAG.circle({"center":[173.5077434,3.9624],"radius":2.5})
.subtract(
    CAG.circle({"center":[173.5077434,3.9624],"radius":1.5})
)).union(
    CAG.circle({"center":[153.7477434,43.5864],"radius":2.5})
.subtract(
    CAG.circle({"center":[153.7477434,43.5864],"radius":1.5})
)).union(
    CAG.circle({"center":[213.0277434,9.906],"radius":2.5})
.subtract(
    CAG.circle({"center":[213.0277434,9.906],"radius":1.5})
)).union(
    CAG.circle({"center":[213.0277434,49.53],"radius":2.5})
.subtract(
    CAG.circle({"center":[213.0277434,49.53],"radius":1.5})
)).union(
    CAG.circle({"center":[83.1896033,-7.3852903],"radius":2.5})
.subtract(
    CAG.circle({"center":[83.1896033,-7.3852903],"radius":1.5})
)).union(
    CAG.circle({"center":[49.4,3.9624],"radius":2.5})
.subtract(
    CAG.circle({"center":[49.4,3.9624],"radius":1.5})
)).union(
    CAG.circle({"center":[69.16,43.5864],"radius":2.5})
.subtract(
    CAG.circle({"center":[69.16,43.5864],"radius":1.5})
)).union(
    CAG.circle({"center":[9.88,9.906],"radius":2.5})
.subtract(
    CAG.circle({"center":[9.88,9.906],"radius":1.5})
)).union(
    CAG.circle({"center":[9.88,49.53],"radius":2.5})
.subtract(
    CAG.circle({"center":[9.88,49.53],"radius":1.5})
)).extrude({ offset: [0, 0, 3.5] });
}


function l_usb_conn_extrude_1_outline_fn(){
    return new CSG.Path2D([[-4.84,97.536],[-4.84,67.436]]).appendPoint([5.16,67.436]).appendPoint([5.16,97.536]).appendPoint([-4.84,97.536]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function r_usb_conn_extrude_1_outline_fn(){
    return new CSG.Path2D([[227.7477434,97.536],[227.7477434,67.436]]).appendPoint([217.7477434,67.436]).appendPoint([217.7477434,97.536]).appendPoint([227.7477434,97.536]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function l_usb_conn_reinforcement_extrude_0_5_outline_fn(){
    return new CSG.Path2D([[-7.8245558,71.3124465],[-7.0294744,64.9517955]]).appendArc([-5.3277614,63.2199659],{"radius":2,"clockwise":false,"large":false}).appendPoint([5.0946766,61.7310462]).appendArc([7.3675938,63.5119378],{"radius":2,"clockwise":false,"large":false}).appendPoint([8.1500744,71.336744]).appendArc([8.16,71.5357514],{"radius":2,"clockwise":false,"large":false}).appendPoint([8.16,77.2856]).appendPoint([-7.84,77.2856]).appendPoint([-7.84,71.5605159]).appendArc([-7.8245558,71.3124465],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 0.5] });
}


function r_usb_conn_reinforcement_extrude_0_5_outline_fn(){
    return new CSG.Path2D([[230.7322992,71.3124465],[229.9372178,64.9517955]]).appendArc([228.2355048,63.2199659],{"radius":2,"clockwise":true,"large":false}).appendPoint([217.8130668,61.7310462]).appendArc([215.5401496,63.5119378],{"radius":2,"clockwise":true,"large":false}).appendPoint([214.757669,71.336744]).appendArc([214.7477434,71.5357514],{"radius":2,"clockwise":true,"large":false}).appendPoint([214.7477434,77.2856]).appendPoint([230.7477434,77.2856]).appendPoint([230.7477434,71.5605159]).appendArc([230.7322992,71.3124465],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 0.5] });
}




                function top_case_case_fn() {
                    

                // creating part 0 of case top_case
                let top_case__part_0 = top_plate_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let top_case__part_0_bounds = top_case__part_0.getBounds();
                let top_case__part_0_x = top_case__part_0_bounds[0].x + (top_case__part_0_bounds[1].x - top_case__part_0_bounds[0].x) / 2
                let top_case__part_0_y = top_case__part_0_bounds[0].y + (top_case__part_0_bounds[1].y - top_case__part_0_bounds[0].y) / 2
                top_case__part_0 = translate([-top_case__part_0_x, -top_case__part_0_y, 0], top_case__part_0);
                top_case__part_0 = rotate([0,0,0], top_case__part_0);
                top_case__part_0 = translate([top_case__part_0_x, top_case__part_0_y, 0], top_case__part_0);

                top_case__part_0 = translate([0,0,0], top_case__part_0);
                let result = top_case__part_0;
                
            

                // creating part 1 of case top_case
                let top_case__part_1 = heat_set_bores_extrude_3_5_outline_fn();

                // make sure that rotations are relative
                let top_case__part_1_bounds = top_case__part_1.getBounds();
                let top_case__part_1_x = top_case__part_1_bounds[0].x + (top_case__part_1_bounds[1].x - top_case__part_1_bounds[0].x) / 2
                let top_case__part_1_y = top_case__part_1_bounds[0].y + (top_case__part_1_bounds[1].y - top_case__part_1_bounds[0].y) / 2
                top_case__part_1 = translate([-top_case__part_1_x, -top_case__part_1_y, 0], top_case__part_1);
                top_case__part_1 = rotate([0,0,0], top_case__part_1);
                top_case__part_1 = translate([top_case__part_1_x, top_case__part_1_y, 0], top_case__part_1);

                top_case__part_1 = translate([0,0,-3.5], top_case__part_1);
                result = result.union(top_case__part_1);
                
            

                // creating part 2 of case top_case
                let top_case__part_2 = l_usb_conn_extrude_1_outline_fn();

                // make sure that rotations are relative
                let top_case__part_2_bounds = top_case__part_2.getBounds();
                let top_case__part_2_x = top_case__part_2_bounds[0].x + (top_case__part_2_bounds[1].x - top_case__part_2_bounds[0].x) / 2
                let top_case__part_2_y = top_case__part_2_bounds[0].y + (top_case__part_2_bounds[1].y - top_case__part_2_bounds[0].y) / 2
                top_case__part_2 = translate([-top_case__part_2_x, -top_case__part_2_y, 0], top_case__part_2);
                top_case__part_2 = rotate([0,0,0], top_case__part_2);
                top_case__part_2 = translate([top_case__part_2_x, top_case__part_2_y, 0], top_case__part_2);

                top_case__part_2 = translate([0,0,0], top_case__part_2);
                result = result.subtract(top_case__part_2);
                
            

                // creating part 3 of case top_case
                let top_case__part_3 = r_usb_conn_extrude_1_outline_fn();

                // make sure that rotations are relative
                let top_case__part_3_bounds = top_case__part_3.getBounds();
                let top_case__part_3_x = top_case__part_3_bounds[0].x + (top_case__part_3_bounds[1].x - top_case__part_3_bounds[0].x) / 2
                let top_case__part_3_y = top_case__part_3_bounds[0].y + (top_case__part_3_bounds[1].y - top_case__part_3_bounds[0].y) / 2
                top_case__part_3 = translate([-top_case__part_3_x, -top_case__part_3_y, 0], top_case__part_3);
                top_case__part_3 = rotate([0,0,0], top_case__part_3);
                top_case__part_3 = translate([top_case__part_3_x, top_case__part_3_y, 0], top_case__part_3);

                top_case__part_3 = translate([0,0,0], top_case__part_3);
                result = result.subtract(top_case__part_3);
                
            

                // creating part 4 of case top_case
                let top_case__part_4 = l_usb_conn_reinforcement_extrude_0_5_outline_fn();

                // make sure that rotations are relative
                let top_case__part_4_bounds = top_case__part_4.getBounds();
                let top_case__part_4_x = top_case__part_4_bounds[0].x + (top_case__part_4_bounds[1].x - top_case__part_4_bounds[0].x) / 2
                let top_case__part_4_y = top_case__part_4_bounds[0].y + (top_case__part_4_bounds[1].y - top_case__part_4_bounds[0].y) / 2
                top_case__part_4 = translate([-top_case__part_4_x, -top_case__part_4_y, 0], top_case__part_4);
                top_case__part_4 = rotate([0,0,0], top_case__part_4);
                top_case__part_4 = translate([top_case__part_4_x, top_case__part_4_y, 0], top_case__part_4);

                top_case__part_4 = translate([0,0,1.5], top_case__part_4);
                result = result.union(top_case__part_4);
                
            

                // creating part 5 of case top_case
                let top_case__part_5 = r_usb_conn_reinforcement_extrude_0_5_outline_fn();

                // make sure that rotations are relative
                let top_case__part_5_bounds = top_case__part_5.getBounds();
                let top_case__part_5_x = top_case__part_5_bounds[0].x + (top_case__part_5_bounds[1].x - top_case__part_5_bounds[0].x) / 2
                let top_case__part_5_y = top_case__part_5_bounds[0].y + (top_case__part_5_bounds[1].y - top_case__part_5_bounds[0].y) / 2
                top_case__part_5 = translate([-top_case__part_5_x, -top_case__part_5_y, 0], top_case__part_5);
                top_case__part_5 = rotate([0,0,0], top_case__part_5);
                top_case__part_5 = translate([top_case__part_5_x, top_case__part_5_y, 0], top_case__part_5);

                top_case__part_5 = translate([0,0,1.5], top_case__part_5);
                result = result.union(top_case__part_5);
                
            
                    return result;
                }
            
            
        
            function main() {
                return top_case_case_fn();
            }

        