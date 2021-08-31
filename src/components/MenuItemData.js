import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';
import * as AiIcons from 'react-icons/ai';

export const menuItems = [
    {
        id: 0,
        name: "Ana Sayfa",
        exact: true,
        to: "/",
        iconClassName: <FaIcons.FaHome />,
    },
    {
        id: 1,
        name: "Döviz",
        exact: true,
        to: "/currency",
        iconClassName: <FcIcons.FcCurrencyExchange />,
    },
    {
        id: 2,
        name: "Altın",
        exact: true,
        to: "/golden",
        iconClassName: <AiIcons.AiFillGold />,
    },
    {
        id: 3,
        name: "Hisse Senetleri",
        exact: true,
        to: "/stocks",
        iconClassName: <AiIcons.AiOutlineStock />,
    },
    {
        id: 4,
        name: "Kripto Paralar",
        exact: true,
        to: "/cryptho",
        iconClassName: <FaIcons.FaBitcoin />,
         
    },
];