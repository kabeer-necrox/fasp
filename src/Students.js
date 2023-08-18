function Students(props){

    return(
        <div>
     <h1>{props.name}</h1>
     <h2 style={{backgroundColor:"red"}}>{props.email}</h2>
        </div>
    )
}

export default Students;