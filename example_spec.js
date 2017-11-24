//import {AppPage} from './po';
const searchField = '#lst-ib';
const firstLink = '//*[@id="rso"]/div/div/div[1]/div/div/h3/a';
const searchBtn = 'btnK'; 

describe('Google search tests', ()=>{  
  it('should display title', () => {
    //page.navigateTo();
    navigateTo();
    searchForText('Page Object - Martin Fowler');
    goToFirstLink();
    expect(getCurrentUrl()).toEqual('https://martinfowler.com/bliki/PageObject.html');
  })   
})

  function navigateTo(){
    browser.ignoreSynchronization = true;
    return browser.get('http://www.google.com.ua');
  };

  function searchForText(text) {
    element(by.css(searchField)).sendKeys(text);
    element(by.name(searchBtn)).click();
    // browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  function goToFirstLink(){
    element(by.xpath(firstLink)).click();
  }

  function getCurrentUrl(){
    return browser.getCurrentUrl();
  }