import Header from './Header';
import Cards from './Cards';
import TodoBox from './TodoBox';
import { useLocation } from 'react-router-dom';

function Landing() {
    const user = useLocation()

    return (
            <div className='bg-[#EFEFEF] p-3 md:p-10 rounded-xl border'>
                <Header user = {user.state.user} />
                <div className='flex justify-between gap-2 my-5 flex-wrap'>
                    <Cards bgcolor={"#8272DA"} title={"24 deg Celsius"} subtitle={"Chennai"} />
                    <Cards bgcolor={"#FD6663"} title={"June 18"} subtitle={"08:40:36"} />
                    <Cards bgcolor={"#FDA201"} title={"Built using"} subtitle={"React"} />
                </div>
                <div className='flex gap-5'>
                    <TodoBox />
                </div>
            </div>
    )
}

export default Landing