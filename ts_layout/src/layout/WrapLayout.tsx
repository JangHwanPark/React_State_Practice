import React from 'react';

export default function WrapLayout({children}: any) {
    return (
        <div className={'container'}>
            <header className={'header'}>
                <div className={'header_wrap'}>
                    <div><span>Logo</span></div>
                    <nav>
                        <ul className={'nav_list'}>
                            <li>Menu1</li>
                            <li>Menu2</li>
                            <li>Menu3</li>
                            <li>Menu4</li>
                            <li>Menu5</li>
                        </ul>
                    </nav>
                </div>
            </header>
                <div className={'contents'}>
                    {children}
                </div>
            <footer className={'footer'}>
                <div>Footer</div>
            </footer>
        </div>
    );
}