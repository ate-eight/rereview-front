'use client';

import { useEffect, useState } from 'react';

import { css } from '@/styled/css';

const Home = () => {
    const [state, setState] = useState<{ name: string }>();

    useEffect(() => {
        fetch('http://localhost:3000/api/test')
            .then((res) => res.json())
            .then((data) => setState(data));
    }, []);

    return (
        <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
            Hello 🐼!
            {state?.name}
        </div>
    );
};

export default Home;
