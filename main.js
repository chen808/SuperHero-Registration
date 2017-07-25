// Store, Create, Display hero list
var getStoreVal =  (function(){
  // Container to store incoming hero names
  var heroDataBase = []
  // Public
  return {
    savingInput: function(heroLevel, heroName, heroAbility) {
      // Creating Object, store incoming hero data
      var createHero = {
        'Level' : heroLevel,
        'Name' : heroName,
        'Ability' : heroAbility
      }
      // Storing new Hero data to array
      heroDataBase.push(createHero);
    },
    displayDataBase: function() {
      // Create the Html
      var oldHtml = '<ul><li>%Level%</li><li>%Name%</li><li>%Ability%</li></ul>'
      // Testing out heroDataBase array
      console.log(heroDataBase);
      // Loop through heroDataBase object and replace oldHtml
      for(var i=0; i<heroDataBase.length; i++) {
        var newHtml = oldHtml.replace('%Level%', heroDataBase[i].Level);
        newHtml = newHtml.replace('%Name%', heroDataBase[i].Name);
        newHtml = newHtml.replace('%Ability%', heroDataBase[i].Ability);
      }
      // Inject new HTML
      document.getElementById('hero-list').insertAdjacentHTML('beforeend', newHtml);
      // Clear Fields
      document.getElementById('form-enter-name').value="";
      document.getElementById('form-enter-ability').value="";
      return heroDataBase;
    }
  }
})();


// Get the Value
var getValController = (function(){
  // Store strings
  var DOMstrings = {
    heroLevel : '.form-clearance-level',
    heroName : '.form-enter-name',
    heroAbility : '.form-enter-ability'
  };

  // Public
  return {
    getInput: function() {
      return {
        level: document.querySelector(DOMstrings.heroLevel).value,
        name: document.querySelector(DOMstrings.heroName).value,
        ability: document.querySelector(DOMstrings.heroAbility).value
      }
    }
  }
})();


// Controller: Global
var globalController = (function(saveVal, getVal){
  // Gets value using controller 'getValController'
  var ctrlGetVal = function() {
    // Values get stored
    var heroRegisterd = getVal.getInput();
    // Saving data
    saveVal.savingInput(heroRegisterd.level, heroRegisterd.name, heroRegisterd.ability);
    // Displaying Data
    var displayHeroNames = saveVal.displayDataBase();

  };
  // When the button is clicked, run the 'ctrlGetVal' function
  document.querySelector('.form-submit-btn').addEventListener('click', ctrlGetVal);
})(getStoreVal, getValController);
