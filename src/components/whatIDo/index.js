import FullStackSvg from '../../../public/assets/fullStack.svg';
import CategorySection from './categorySection';

export default function WhatIDo() {
    return (
        <div className='text-dark-blue-color text-center'>
            <h1 className='text-3xl md:text-5xl sm:text-5xl mt-[50px] md:mt-[100px] sm:mt-[100px] font-bold mb-[0px] sm:mb-[80px] md:mb-[80px]'>What I Do?</h1>
            <CategorySection
                title={"Full Stack Development"}
                detailsList={[
                    ' Building responsive website front end using React - Redux.',
                    'Developing mobile applications using React Native.',
                    'Creating application backend in Django.'
                ]}
                image={FullStackSvg}
            />
        </div>
    )
}