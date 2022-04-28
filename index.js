// DEFINING A CLASS
class MyClass {
  propertyOne;
  proeprtyTwo;

  constructor(propertyOne, proeprtyTwo) {
    this.propertyOne = propertyOne;
    this.proeprtyTwo = proeprtyTwo;
  }

}

// USING A CLASS
const myInstance /* whatever name */ = new MyClass('propertyOneValue', 'propertyTwoValue');
const mySecontadInstance = new MyClass('secondPropertyOneValue', 'secondPropertyTwoValue');

console.log(myInstance);
console.log(mySecontadInstance);

// WORKING PROMISES
// DEFINIG THE PROMISES
function promiseExample() {
  const resultPromise = new Promise((resolve, reject) => {
    resolve('promiseExample resolve');
    reject('promiseExample reject')
  });
  return resultPromise;
}

// USING THE PROMISES with then, with catch and with finally
promiseExample()
  .then(value => {
    console.log(value) // resolve: promiseExample resolve
    return promiseExample()
  })
  .then(
    value => console.log(value) // resolve: promiseExample resolve
  )
  .catch(error => console.error(error)) // reject: promiseExample reject
  .finally(() => console.log('this is finally')); // this is finally

// USING THE PROMISES with async await
async function understandingPromiseExample() {
  // one way to use it
  const promiseResultValue = await promiseExample(); // promiseExample resolve

  // second way to use it
  try {
    const promiseResultValueWithTry = await promiseExample(); // promiseExample resolve
  } catch (error) {
    console.error(error)
  } finally {
    console.log('this is finally');
  }
}
