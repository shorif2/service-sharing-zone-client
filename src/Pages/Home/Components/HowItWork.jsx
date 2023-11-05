import book from '../../../../src/assets/Image/customer-service.png'
import arrow from '../../../../src/assets/Image/arrow-right.png'
import list from '../../../../src/assets/Image/list.png'
import discussion from '../../../../src/assets/Image/discussion.png'


const HowItWork = () => {
    return (
        <div className='py-24 '>
            <h2 className="text-3xl font-medium text-center">How it works</h2>
            <hr className='font-extrabold text-5xl border border-red-500 mt-3 w-[100px] mx-auto' />

            <div className='flex justify-center pt-20 pb-10'>
            <div className='flex  gap-4'> 
                <div className="flex flex-col items-center">
                    <img src={book} alt=""  className='w-[100px] h-[100px]'/>
                    <h3 className="text-2xl font-medium pt-4">
                        Book
                    </h3>
                    <p className="font-medium">
                        Select the date and time like<br />your professional to show up 
                    </p>
                </div>
                <div className='flex items-end'>
                <img src={arrow} alt="" className='w-[150px] h-[150px]' />
                </div>
                
            </div>
            <div className='flex  gap-4'> 
                <div className="flex flex-col items-center pl-4">
                    <img src={list} alt=""  className='w-[100px] h-[100px]'/>
                    <h3 className="text-2xl font-medium pt-4">
                        Schedule
                    </h3>
                    <p className="font-medium">
                        Select the date and time like<br />your professional to show up 
                    </p>
                </div>
                <div className='flex items-end'>
                <img src={arrow} alt="" className='relative w-[150px] h-[150px] scale-y-[-1] bottom-14' />
                </div>
                <div className='pl-4'>
                <img src={discussion} alt=""  className='w-[100px] h-[100px]'/>
                    <h3 className="text-2xl font-medium pt-4">
                        Relax
                    </h3>
                    <p className="font-medium">
                        Select the date and time like<br />your professional to show up 
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HowItWork;