function Item({ name, isPacked }) {
    /*
    if (isPacked) {
        // return <li className="item">{name} ✅</li>;
        // return null;
        <li className="item">
        {isPacked ? name + ' ✅' : name}
        </li>  
    }
    return <li className="item">{name} 😱</li>;

    return(
        <li className="item">
            {isPacked ? name + ' ✅' : name + ' 😱'}
        </li>  
    );
    */
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name + ' 😱😱😱'
      )}
    </li>
  );
}

export default function PackingList() {
  return (
    <>
        <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
            <Item 
            isPacked={true} 
            name="Space suit" 
            />
            <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
            />
            <Item 
            isPacked={false} 
            name="Photo of Tam" 
            />
        </ul>
        </section>
    </>
  );
}