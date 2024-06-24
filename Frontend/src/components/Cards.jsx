import React from 'react';

function Cards(props) {
  return (
    <>
      <div className=" mt-4 my-10">
        <div className="card p-3 bg-base-100 shadow-xl">
          <figure>
            <img src={props.item.image} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {props.item.name}
              <div className="badge text-white bg-purple-500">{props.item.category}</div>
            </h2>
            <p>{props.item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">{props.item.price}</div>
              <div className="cursor-pointer p-3 hover:bg-purple-700 hover:text-white duration-200 hover:rounded-md">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
