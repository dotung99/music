import { SiApplemusic } from 'react-icons/si'

function Header() {
    return (
        <div className="h-24 bg-gray-900 text-white text-3xl flex justify-center py-6 ">
            <SiApplemusic className="mr-3 mt-1"/>Zing Mp3
        </div>
    );
}

export default Header;