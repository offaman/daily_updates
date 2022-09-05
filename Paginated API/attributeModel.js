module.exports.sum = function(a,b){
  return a+b
}



module.exports.AttributeModel = class {
  constructor(attributeInput) {
    this.attributeMappingTo = attributeInput.type;
    this.attributeCategory = attributeInput.category;
    this.attributeName = attributeInput.name;
    // locale specific property
    this.attributeValue = attributeInput.value || {};
  }
};
