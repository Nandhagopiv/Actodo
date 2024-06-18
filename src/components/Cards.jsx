function Cards(props){
    return(
        <div style={{backgroundColor:props.bgcolor}} className='p-5 border rounded-md flex-grow text-center'>
        <h1 className='text-2xl font-bold'>{props.title}</h1>
        <p className='text-xl'>{props.subtitle}</p>
      </div>
    )
}

export default Cards