export const populateUi = (data, cb) => {
    const fragment = document.createDocumentFragment();// (cream un fragment, o bucata de DOM care nu e pictata si apoi o punem apoi in DOM - un fel de optimizare)
    data.forEach(obj => {
        const cardElement =  cb(obj);
        fragment.append(cardElement);
    });
    return fragment;
}
// fragment este o bucata de DOM care nu se picteaza in browser si se creeaza separat, iar asta ne ajuta la optimizare



//explicatia este facuta pentru details.js, dar aceasta functie se aplica si la userDetails.js
export function getQueryParams(paramKey) {
const stringParams = location.search;
const params = stringParams.slice(1).split('&');// metode ale stringului: slice-scoate afara primul caracter(la noi este ?), split - facem pt a face un array din string despartit la &
// //params =['id=1', 'title=iPhone%209']
let val = null; // am declarat o variabila val nula 
params.forEach((elem, index) => {
    if(elem.includes(paramKey)) { //(daca elementul include acea cheie id=1 si paramkey ="id")
//         //am obtinut dupa elem.split => ["id", "1"];
        val = elem.split('=')[1];//aici am obtinut al doilea element din array care are index 1 deoarece vrem valoare id ului
     }
   })
   return val;//val = 1(am scos valoarea de la cheia ID care ne interesa pe noi)
}