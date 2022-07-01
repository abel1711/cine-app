import {FormEvent, useState } from 'react';
import { BiCameraMovie } from 'react-icons/bi';
interface Props {
    search:( key: string )=>{};
}

export const Navbar = ( { search }:Props) => {

    const [searchKey, setSearchKey] = useState('');

    const handleSearch = async(event: FormEvent<HTMLFormElement>)=>{

        event.preventDefault();
         search(searchKey)
        setSearchKey('');

    }

  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand " href="#"><BiCameraMovie size={'2rem'} color='red'/>Cine-app</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <form className="d-flex my-1" role="search" onSubmit={ handleSearch}>
                    <input className="form-control me-2" type="search" placeholder="Buscar película" name='search' value={searchKey} onChange={ (event)=>{ setSearchKey( event.target.value )} } aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </div>
        </nav>
  )
}
