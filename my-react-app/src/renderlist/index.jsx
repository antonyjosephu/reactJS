import List from './List.jsx'
function RenderList(){
  const fruits = [{ id: 1, name: "apple", calories: "Apple" },
                { id: 2, name: "orange", calories: 45 },
                { id: 3, name: "banana", calories: 105 },
                { id: 4, name: "pinapple", calories: 37 },
                { id: 5, name: "mango", calories: 60 }];

                
  const vegetables= [{ id: 6, name: "potatoes", calories: 110 },
                      { id: 7, name: "celery", calories: 15 },
                      { id: 8, name: "carrots", calories: 25 },
                      { id: 9, name: "corn", calories: 63 },
                      { id: 10, name: "broccoli", calories: 50 }];             
  return(
    <>
    <h1>Render List</h1>
    {fruits.length>0 && <List items={fruits} category="Fruits"/> }
    {vegetables.length>0 && <List items={vegetables} category="Vegetables"/>}
    </>
  );

}


export default RenderList