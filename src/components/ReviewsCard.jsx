import React from 'react'
import { IoMdStarOutline } from 'react-icons/io'

export default function ReviewsCard() {
  return (
      <div className='w-88
     h-72 bg-white rounded-2xl p-6'>
        <div className="flex gap-4 mb-4">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoZw811gnayih2_kLE4k_ahideIL7TG8m-h4MsONaTnOH9yB1z8F-_s6JRFod2_3i6BJPbTr3KuDdoEFBK42PxoKTeNzSreMwNKFMhLfnvaxYuhqMATfcrlPngZmOzwFw29mVxncz9KegKu54KPmRzxBCj64J8YVgwGpihXC1w6TddFmvuJ2fp5l0f59_wvi3Lvw-yVAI6eZHhSI9dN2sy4N6S8kse1kaeIjEX5Q0TsdgkPBxp99hV6M60bf1qDvg3r5S_qAk81iuq" alt="" className='w-18 h-24 rounded-xl'/>
            <div className="">
                <h3 className='text-lg'>The Midnight Library</h3>
                <p className='text-gray-400'>by {`Matt Haig`}</p>
                <div className="flex text-orange-400">
                    <IoMdStarOutline />
                    <IoMdStarOutline />
                    <IoMdStarOutline />
                    <IoMdStarOutline />
                    <IoMdStarOutline />
                </div>
            </div>
        </div>
        <p className='mb-4 border-b border-gray-300 font-sans italic pb-3 text-sm'>{`"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores inventore veniam ullam debitis ab quis voluptatum ipsa ea soluta cumque."`}</p>
        <div className="flex justify-start items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-black"></div>
              <p className='text-sm'>@{`SarahReads_`}</p>
        </div>
    </div>
  )
}
