module.exports = function parseStringAsArray(arrayAsString) {
    if(parseStringAsArray){
        return arrayAsString.split(',').map(tech => tech.trim());
    }else return null
}