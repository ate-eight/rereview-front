'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import { css } from '@/styled-system/css';

const Home = () => {
    const [state, setState] = useState<{ name: string }>();

    const handleOnFetch = () => {
        fetch('http://localhost:3000/api/test')
            .then((res) => res.json())
            .then((data) => setState(data));
    };

    return (
        <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
            Hello 🐼!
            {state?.name}
            <Button label='Button' onClick={handleOnFetch} />
        </div>
    );
};

export default Home;
