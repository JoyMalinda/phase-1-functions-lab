function distanceFromHqInBlocks(distance) {
    if(distance > 42) {
        return distance - 42
    } 
        else (distance < 42);{
            return 42 - distance
        }}

function distanceFromHqInFeet(distance) {
    if(distance > 42) {
        return (distance - 42)*264
    }
        else(distance < 42);{
            return (42 - distance)*264
        }}  
        
function distanceTravelledInFeet(distance, destination) {
    if(distance < destination) {
        return (destination - distance)*264
    }
        else(distance > destination);{
            return (distance - destination)*264
        }}  

function calculatesFarePrice(start, destination) {
    let distance1 = (destination - start)*264
    let distance2 = (start - destination)*264
    if(distance1 <= 400 && distance1 > 0) {
        return 0;
    }else if(distance2 <= 400 && distance2 > 0) {
        return 0;
    }else if((distance1 > 400 && distance1 <= 2000)) {
        return (distance1 - 400)*0.02
    }else if(distance2 > 400 && distance2 <= 2000) {
        return (distance2 - 400)*0.02;
    }else if(distance1 > 2000 && distance2 <= 2500) {
        return 25
    }else if(distance2 > 2000 && distance2 <= 2500) {
        return 25
    }else(distance1 > 2500 || distance2 > 2500);{
        return 'cannot travel that far'  
}}