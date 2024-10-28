import ImageSlider from "@/components/ImageSlider/ImageSlider";


export default function Home() {
  return (
    <div className="flex  flex-1 justify-center items-center md:pl-40 md:pr-40 p-8 pb-20 gap-10 h-screen">


         <ImageSlider/>
          
        
        <section className="w-1/2 flex items-center justify-items-center h-1/2">
          <h2 className="text-4xl font-extrabold text-yellow-400"> <span className={`animate-bounce text-orange-700 text-7xl block`}> Welcome </span> To Best Meal We Look </h2>


        </section>
      
        

        
     
    </div>
  );
}
