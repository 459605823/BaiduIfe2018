export {fetch,save};

const STORAGE_KEY = "sourceData";

function fetch(){
  return JSON.parse(window.localStorage.getItem(STORAGE_KEY));
}

function save(items){
  window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
}
