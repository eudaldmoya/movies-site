import SearchFormComponent from './SearchFormComponent';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className="header">
            <div className='header-div'>
                <div className='header-left'>
                    <div className='home-link-div'><h5 className='header-title'><Link to="/" className='home-link'>Film Database</Link></h5></div>
                </div>
                <div className='header-right'>
                    <SearchFormComponent/> 
                </div> 
            </div>
        </header>
    );
};