
import React from 'react';
import APP_MESSAGES from '../messages/app-messages';

const HeaderComponent = () => {

    const headerMessage = APP_MESSAGES.header.navigation;

    return (
        <>
        <nav className='navbar navbar-dark navbar-expand-lg'>
            <div className='container'>
                <a className='navbar-logo' href=''>
                    { headerMessage.logo }
                </a>
                <form className='form-inline my-2 my-lg-0'>
                    <input className='form-control mr-sm-2 header-search' type='search' placeholder='Try New York' aria-label='Search'></input>
                    <button className='btn btn-outline-success my-2 my-sm-0 btn-header-search' type='submit'>
                        { headerMessage.search }
                    </button>
                </form>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNavAltMarkup'
                    aria-controls='navbarNavAltMarkup'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav ml-auto'>
                    <a className='nav-item nav-link active' href=''>
                        { headerMessage.login }
                        <span className='sr-only'>
                            { headerMessage.current }
                        </span></a>
                    <a className='nav-item nav-link' href=''>
                        { headerMessage.register }
                    </a>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default HeaderComponent;
