import { Dialog } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import Navbar from '../shared/Nav';

 
import { doc, onSnapshot} from "firebase/firestore"
import { useFirestore } from '~/lib/firebase';

 
 function Index() {

  const [isOpen, setIsOpen] = useState(false);
  const completeButtonRef = useRef(null); 

  const db = useFirestore()

  const [data, setData] = useState({});

  
  const [f, setF] = useState(false)

  useEffect(()=>{
    onSnapshot(doc(db, "current_data", "value"), (doc) => {
      setData(doc.data());
      console.log("Current data: ", doc.data());
  });
  setF(true)
  }, [f])

  const symptoms = [
    {
      q : "আপনার শরীরের তাপমাত্রা কত?",
      options : [
        {
          n: "98 ডিগ্রি ফারেনহাইট এর কম",
          w: 4
        },
        {
          n: "99 ডিগ্রি - 100 ডিগ্রি ফারেনহাইট",
          w: 7
        },
        {
          n: "101 ডিগ্রি - 103 ডিগ্রি ফারেনহাইট",
          w: 9
        },
        {
          n: "104 ডিগ্রি ফারেনহাইট এর বেশী",
          w: 10
        },
      ]
    },
    {
      q: "আপনার শরীরে র‍্যাশ কি আছে?",
      options : [
        {
          n: "হ্যাঁ",
          w: 10
        },
        {
          n: "না",
          w: 4
        },
      ]
    },
    {
      q: "শরীরে বিভিন্ন স্থানে ব্যাথা আছে?",
      options : [
        {
          n: "হ্যাঁ",
          w: 8
        },
        {
          n: "না",
          w: 5
        },
      ]
    },

    {
      q: "বমি ভাব বা বমি হয়েছে?",
      options : [
        {
          n: "হ্যাঁ",
          w: 6
        },
        {
          n: "না",
          w: 4
        },
      ]
    },
    {
      q: "মাথাব্যাথা ও চোখের পেছনে ব্যাথা আছে?",
      options : [
        {
          n: "হ্যাঁ",
          w: 6
        },
        {
          n: "না",
          w: 4
        },
      ]
    },

  ]


  const [res, setRes] = useState([])


  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);
  const [m, setM] = useState(0);

  const [showResult, setShowResult] = useState(false);

const doMath = () => {


  if(res.length===5){
 
    const y = ((m/50 * 100));
    setM(y)
    setRes([])
    setShowResult(true)
 
    console.log(y);

  }else{
    alert("Complete All Question First.")
  }

}
  return (
    <>
       
      <Navbar />

      
  <main className="container py-8 mx-4">
    {/* Background Image and Dengue Information */}
    <div className="bg-cover bg-center bg-blue-900 text-white rounded border">
        <div className="container mx-auto flex flex-wrap justify-center items-center">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2">
                <img src="https://di.myupchar.com/24/dengue-fever-dengue-bukhar-ke-lakshan-karan-upchar-bachav-ilaj-dawa-in-hindi.webp" alt="dengue" />
            </div>

            {/* Right Column - Text */}
            <div className="w-full md:w-1/2 px-4">
                <h2 className="text-4xl font-semibold mb-4">ডেঙ্গু মহামারী সম্পর্কে জানুন</h2>
                <p className="text-lg">
                    ডেঙ্গু একটি জীবাণুমূক্ত জন্তু দ্বারা সংক্রমিত একটি জনস্বাস্থ্য সমস্যা, যা বাংলাদেশে আলোচ্য হয়েছে। ডেঙ্গু জনসংখ্যা বেড়ে গিয়েছে, এবং এটি মানুষের জীবনে গভীর প্রভাব ফেলছে। উচ্চ বৃষ্টি, তাপমাত্রা এবং আবব্ধতা সহ অস্বাভাবিক আবহাওয়া পরিস্থিতির ফলে মাচর জনসংখ্যা বাড়ছে, এবং ডেঙ্গু মহামারীর প্রকাশনা আরো বাড়তে জাচ্ছে। আমরা প্রযুক্তি এবং সম্প্রদায় সংলগ্নকরণের মাধ্যমে এই সমস্যার সমাধানে এবং জনস্বাস্থ্যে গুরুত্বপূর্ণ পরিবর্তন আনতে নির্ধারিত করা আছি।
                </p>
            </div>
        </div>
    </div>

    {/* Call to Action */}
    <div className="text-center m-8">
        <a  onClick={(e)=>{
                      e.preventDefault()
                      setIsOpen(true);
                    }}  className="bg-blue-900  text-white hover:bg-blue-700 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out">লক্ষণ যাচাই করে ডেঙ্গু হওয়ার সম্ভাবনা নির্ণয়</a>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md py-4 my-4">
        <h2 className="text-2xl font-semibold mb-4">সর্বশেষ আপডেট</h2>
        <ul className="text-gray-700">
            <li className="mb-2">
                <strong>গত ২৪ ঘণ্টায় আক্রান্তঃ</strong> {data.t_effected} জন আক্রান্ত হয়েছে।
            </li>
            <li className="mb-2">
                <strong>গত ২৪ ঘণ্টায় মৃত্যুঃ</strong> {data.t_death} জন মৃত্যুবরন করেছে।
            </li>
            <li className="mb-2">
                <strong>গত এক সপ্তাহে আক্রান্তের সংখ্যাঃ </strong> {data.week} জন আক্রান্ত হয়েছে।
            </li>
            <li className="mb-2">
                <strong>গত এক মাসে আক্রান্তের সংখ্যাঃ</strong> {data.month} জন মৃত্যুবরন করেছে।
            </li>
        </ul>
    </div>
    <section id="details">
        {/* Left Column - Mission Statement */}

          <div className="bg-blue-900 my-12 text-white bg-cover bg-center p-6 rounded-lg shadow-md py-4 mb-4">
                <div className="container mx-auto flex flex-wrap justify-center items-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">ডেঙ্গু এর উপসর্গ</h2>
                        <p className="text-white">
                        যে ব্যক্তির ডেঙ্গু হয়েছে সে সম্প্রতি এমন জায়গায় গিয়েছিল যেখানে ডেঙ্গু হচ্ছে অথবা সেই স্থান থেকে কোন ব্যক্তি এই ডেঙ্গু আক্রান্ত ব্যক্তির বাড়িতে এসেছে। ডেঙ্গুর লক্ষণ এবং উপসর্গগুলি হচ্ছে:
                    </p>
                    <ul className="list-disc list-inside text-white">
                        <li>হঠাৎ খুব বেশি জ্বর হওয়া (40°C/104°F)। জ্বরের ধরণ ধারাবাহিকতা থাকে অথবা স্যাডেল ব্যাক এর মত হয়, যেমন চার থেকে পাঁচ দিন টানা জ্বরের পর জ্বর না থাকা তারপর আবার জ্বর বাড়তে থাকা। সাধারণত জ্বর সাত থেকে আট দিন থাকে।</li>
                        <li>তীব্র মাথা ব্যথা।</li>
                        <li>বমি বমি ভাব এবং বমি।</li>
                        <li>গাঁটে, পেশীতে এবং চোখের পিছনে ব্যথা।</li>
                        <li>দুর্বলতা।</li>
                        <li>স্বাদ পরিবর্তিত হওয়া, এবং ক্ষুধামান্দ্য (এনোরেক্সিয়া)।</li>
                        <li>গলা ভাঙা।</li>
                        <li>গ্রন্থি এবং লিম্ফ নোড ফুলে যাওয়া।</li>
                        <li>ফুসকুড়ি হলে প্রথমে ত্বক লালচে হয়ে যায় এবং এক বা দুই দিনের মধ্যে হালকা ছোট ম্যাকুলার গোটা দেখা যায়। তৃতীয় থেকে পঞ্চম দিন থেকে দেখা যায় ছোট লাল ফুসকুড়িগুলি, যেগুলি ছোট কনফ্লুয়েন্ট বাম্পস দিয়ে ঢাকা থাকে&nbsp; এবং চাপ দিলে পাণ্ডুবর্ণ হয়ে যায়। সাধারণত এইগুলি শরীরের ঊর্ধ্বাংশে হয় আর তারপর অন্যান্য জায়গায় ছড়িয়ে পড়ে। শুধু হাতের তালু আর পায়ের তালুতে এইগুলি হয় না। ফুসকুড়ি শুরু হওয়ার সাথে শরীরের তাপমাত্রা কমতে থাকে। ফুসকুড়িগুলি খোসার মত খসে পড়ে অথবা ছোট লাল গোল বিন্দু হয়ে যায় (রক্তক্ষরণের কারণে), যেগুলিকে বলা হয় প্যটিচিয়াই।</li>
                        <li>অল্প ক্ষরণের মত উপসর্গগুলি, যেমন, মাড়ি থেকে রক্ত পড়া, নাক থেকে রক্ত পড়া, ঋতুস্রাবের সাথে অস্বাভাবিকভাবে রক্তপাত এবং প্রস্রাবে রক্তের উপস্থিতি।</li>
                    </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                    <img src="http://desunhospital.com/backend/en/uploads/images/1%20-%20Dengue%20Symptoms%20-Fever.png" alt="patient" />
                </div>
                </div>
          </div>


            <div className="bg-blue-900 my-12 text-white bg-cover bg-center p-6 rounded-lg shadow-md py-4 mb-4">
                <div className="container mx-auto flex flex-wrap justify-center items-center">
                    <div className="w-full md:w-1/2">
                        <img src="http://desunhospital.com/backend/en/uploads/images/2-%20Medical%20Help%20in%20Dengue%20-%20Avoid%20Self%20Medication.png" alt="treatment" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">ডেঙ্গু এর চিকিৎসা</h2>
                        <p className="text-white">
                            উপসর্গের যেকোনো একটি বা কয়েকটি ক্ষেত্র প্ররিলক্ষিত হলেঃ
                        </p>
                        <ul className="list-disc list-inside text-white">
                            <li>বিশেষজ্ঞের পরামর্শ নেওয়া উচিৎ</li>
                            <li>চারপাশের পরিবেশ পরিষ্কার রাখা দরকার</li>
                            <li>ডাক্তারের দেওয়া টেস্ট করিয়ে নেওয়া উচিৎ</li>
                            <li>নিজে থেকে ঔষুধ খাওয়া উচিৎ নয়</li>
                            <li>অ্যাসপিরিন জাতীয় ঔষুধ খাওয়া উচিৎ নয় এগুলি রক্তকে পাতলা করে দেয়</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-blue-900 text-white bg-cover bg-center p-6 rounded-lg shadow-md py-4 mb-4">
                <div className="container mx-auto flex flex-wrap justify-center items-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">ডেঙ্গু থেকে বাঁচতে</h2>
                        <ul className="list-disc list-inside text-white">
                            <li>ঘিঞ্জি জনবসতিপূর্ণ এলাকায় না থাকার চেষ্টা করুন</li>
                            <li>বাড়িতে মশারি, মশা তাড়ানোর ঔষধ ব্যবহার করুন</li>
                            <li>বাইরে যাওয়ার সময় ফুলহাতা জামা ব্যবহার করুন</li>
                            <li>মোজা পরুন</li>
                            <li>জানালায় নেট লাগান অথবা দরজা জানালা বন্ধ করে রাখুন</li>
                            <li>এয়ারকন্ডিশন থাকলে ব্যবহার করুন</li>
                            <li>ডেঙ্গুর লক্ষণ থাকলে ডাক্তার দেখান</li>
                            <li>দিনের বেলা ও সন্ধ্যার সময় ডেঙ্গু মশা কামড়ায়</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src="http://desunhospital.com/backend/en/uploads/images/3%20-%20Protect%20Yourself.png" alt="prevention" />
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md py-4 mb-4">
                <h2 className="text-2xl font-semibold mb-4">আমাদের লক্ষ্য</h2>
                <p className="text-gray-700">
                    আমাদের লক্ষ্য হলো ডেঙ্গু মহামারীর বিপর্যন্ত প্রতিরোধ করা এবং এই সমস্যার প্রতি জনস্বাস্থ্য সেবা প্রদান করা। ডেঙ্গু প্রতিরোধে শিক্ষা দেওয়া, সম্প্রদায় সচেতনতা বাড়ানো, মশারি নিয়ন্ত্রণে সাহায্য করা এবং ডেঙ্গু আক্রান্ত ব্যক্তিদের উপযুক্ত চিকিৎসা প্রদান করা আমাদের লক্ষ্য।
                </p>
            </div>
    </section>
</main>

      
    
      
      <Dialog
        className="flex fixed inset-0 z-10 overflow-y-auto"
        initialFocus={completeButtonRef}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="flex items-center justify-center min-h-screen w-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded max-w-120 p-8 mx-auto">
            <Dialog.Title>নিচের প্রশ্নগুলোর উত্তর দিনঃ</Dialog.Title>
            <div className="text-xs font-light">আপনার লক্ষন সমূহ অনুসারে নিচের অপশন সমূহ হতে বাচাই করুন।</div>

                   {
                    symptoms[index].q
                   }


                   <div>
                   {symptoms[index].options?.map((e) => (
    <div key={e.n}>
      <label>
        <input
          type={symptoms[index].q === "আপনার শরীরে র‍্যাশ কি আছে?" ? "checkbox" : "radio"}
          name="options"  
          value={e.n}  
          checked={value === e.n}  
          onChange={(event) => {
            setValue(event.target.value);  

            setRes((res) => {
              const d = res;
              d[index] = e.w;
              return d;
            })

            setM((m)=>{
              return (m+e.w)
            })

            console.log(res)
          }}
        />
        {e.n}
      </label>
    </div>
  ))}
                   </div>

                   <div className="flex flex-row justify-between w-full">
                    <button  onClick={(e)=>{
                      e.preventDefault()

                     if(index!==0){
                      setIndex((prev)=>{
                        let s = prev;
                        s--;
                        return s;
                      })
                     }
                    }}>Prev</button>
                    <button onClick={(e)=>{
                      e.preventDefault()
                      if(index===4){
                        doMath()
                      }else{
                        setValue("");
                        setIndex((prev)=>{
                          let s = prev;
                          s++;
                          return s;
                        })
                      }
                    }}>Next</button>
                   </div>



                   {showResult && <div className="bg-sky-100 my-8 px-4 py-2 rounded font-semibold">

                   Dengue Possibility is {m}%
                    </div>
                    
                    }


            <button
              ref={completeButtonRef}
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={() =>{
                setIsOpen(false)
                setIndex(0)
                setRes([])
                setValue("")
                setM(0)
                setShowResult(false)
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Index;
