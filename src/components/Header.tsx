import React, {FC} from 'react';

const Header: FC = () => {
    return (
        <div className='wrapper__header'>
            <p>Рефакторинг <a rel="noreferrer" href='https://www.youtube.com/watch?v=0W6i5LYKCSI' target='_blank'>проекта</a> с
                использованием typescript и RTK Query. Минимум контента, только redux.</p>
        </div>
    );
};

export default Header;
