const inquirer = require('inquirer');
const fs = require('fs');

const renderLogo = ({ text, textColor, shape, shapeColor }) => {
    return `
    `
}

const main = async() => {
    const answers = await inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "What text would you like for your logo? Please choose up to 3 characters",
        },
        {
          type: "input",
          name: "textColor",
          message: "What color would you like your text to be? Please enter a color keyword OR a hexidecimal number.",
        },
        {
          type: "checkbox",
          name: "shape",
          message: "What shape would you like to use in your logo? Please select ONE from the list.",
          choices: ["circle", "triangle", "square"]
        },
        {
          type: "input",
          name: "shapeColor",
          message: "What color would you like your shape to be? Please enter a color keyword OR a hexidecimal number.",
        },
        
      ]);
  
    const svgLogo = renderLogo(answers);
    try{
      fs.writeFileSync('logo.svg', svgLogo);
      console.log('Successfully created logo.svg');
    } catch (err) {
      console.log(err)
    }
  }
  main();