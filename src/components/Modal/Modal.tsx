import { FC, ReactNode, useEffect, useState } from 'react';
import st from './index.module.scss';

type Props = {
    children: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
};

const [isOpen, setIsOpen] = useState(false);

export const Modal: FC<Props> = ({ children, isOpen }) => {
    return (
        <div>
            <div className={st.flex}></div>
        </div>
    );
};
