import React from 'react'
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import SearchInput from '../input/SearchInput';
import Button from '../button/button';

export default function NavBar() {
    return (
        <>
            <nav>
                <div className='nav__left'>
                    <Logo />
                </div>
                <div className='nav__right'>
                    <SearchInput />
                    <Button secondary>Sign in</Button>
                    <Button primary>Sign up</Button>
                </div>
            </nav>
        </>
    )
}
