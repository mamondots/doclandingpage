import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import img from '../../../assets/img/serviceDoctor.png'
import firstImg from '../../../assets/img/CavityProtection.png'
import firstImg02 from '../../../assets/img/CavityProtection2.jpg'
import firstImg03 from '../../../assets/img/CavityProtection3.jpg'

const Services = () => {
    return (
        <div className="mx-32 my-16">
            <div className='grid lg:grid-cols-2 space-x-5'>
                <div className='h-[920px] overflow-hidden'>
                    <img className='' src={img} alt=""/>
                </div>
                <div>
                    <div className='mt-3'>
                         <h2 className='text-2xl font-bold pb-5'>Our Services</h2>
                         <p className='pb-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                         </p>
                    </div>
                    <Tabs>
                        <TabList className='grid lg:grid-cols-3 cursor-pointer space-x-5 text-center'>
                            <Tab className='border-none  font-semibold bg-[#F7A582] px-3 py-4 '>Cavity Protection</Tab>
                            <Tab className='border-none  bg-[#F7A582] px-3  py-4  font-semibold'>Cosmetic Dentisty</Tab>
                            <Tab className='border-none font-semibold bg-[#F7A582] px-3  py-4 '>Oral Surgery</Tab>
                        </TabList>

                        <div className='mt-5'>
                        <TabPanel>
                            <img className='mt-10' src={firstImg} alt="" />
                            <h2 className='py-4 text-xl font-bold'>Electro  Gastrology Therapy</h2>
                            <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error 
                            </p>
                            <p className='mt-3'>
                            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <button className="btn btn-outline btn-warning mt-4">More Details</button>
                        </TabPanel>
                        <TabPanel>
                            <img className='mt-10' src={firstImg02} alt="" />
                            <h2 className='py-4 text-xl font-bold'>Cosmetic Dentisty Therapy</h2>
                            <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error 
                            </p>
                            <p className='mt-3'>
                            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <button className="btn btn-outline btn-warning mt-4">More Details</button>
                        </TabPanel>
                        <TabPanel>
                            <img className='mt-10' src={firstImg03} alt="" />
                            <h2 className='py-4 text-xl font-bold'>Oral Surgery Therapy</h2>
                            <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error 
                            </p>
                            <p className='mt-3'>
                            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <button className="btn btn-outline btn-warning mt-4">More Details</button>
                        </TabPanel>
                        
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Services;