import React from 'react';
import styled from 'styled-components';

const AuthorsWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    z-index: 999;
    font-size: 15px;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-weight: 500;
`;

const Authors = () => (
    <AuthorsWrapper>
        Icons made by{' '}
        <Link href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik{' '}
        </Link>
        <Link href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">
            and Gregor Cresnar{' '}
        </Link>
        from{' '}
        <Link href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
        </Link>
    </AuthorsWrapper>
);

export default Authors;
