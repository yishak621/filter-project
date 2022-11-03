//even if we can use foreach method directly
//to practice the spread operator we use []...

//main function
const updateCount = (el) => {
  const value = parseInt(el.dataset.value); //to convert the value from string to number
  const increment = Math.ceil(value / 1000); //<!--TODO: const increment = 1;we can use this but the increment is constant for every value..but we want to make it dynamic for every value so we use math.ceil(value/1000)

  let initialValue = 0;
  //count function
  const increaseCount = setInterval(() => {
    initialValue += increment;
    //to stop counting when it > value
    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return; //<!--TODO: important
    }
    el.textContent = `${initialValue}+`;
  }, 1); //1 mili second
  //console.log(increaseCount); the id that each span get
};

//items to array
const items = [...document.querySelectorAll('.number')];
items.forEach((item) => {
  updateCount(item); //invoking
});

//two basic things here are
//1] increment=is the value to be added to the number initial value
//2]setinterval(()=>{},1) the 1 mili second is the time to the increaseCount to be excuted
