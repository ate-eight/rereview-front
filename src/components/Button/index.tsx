// import { cva } from '../../styled-system/css';
import { cva } from '@/styled-system/css';

interface Props {
    color?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    label: string;
    onClick?: () => void;
}

const Index = (props: Props) => {
    const { color = 'primary', size = 'md', label, ...rest } = props;

    return (
        <button type='button' className={button({ color, size })} {...rest}>
            {label}
        </button>
    );
};

export default Index;

const button = cva({
    base: {
        cursor: 'pointer',
        display: 'flex',
        color: '#fff',
        _hover: {
            scale: 1.05,
        },
    },
    variants: {
        color: {
            primary: { backgroundColor: '#006FEE' },
            secondary: { backgroundColor: '#CCE3FD' },
        },
        size: {
            sm: { padding: '4', fontSize: '12px', borderRadius: '12px' },
            md: { padding: '6', fontSize: '18px', borderRadius: '16px' },
            lg: { padding: '8', fontSize: '24px', borderRadius: '20px' },
        },
    },
});
