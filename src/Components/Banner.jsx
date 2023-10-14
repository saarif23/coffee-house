
const Banner = () => {
    return (
        <div className="flex min-h-screen  justify-center gap-3 items-center p-3 text-white bg-cover" style={{ backgroundImage: 'url("https://i.ibb.co/KmzC1gb/3.png")' }}>
           <div className="flex-1"></div>
           <div className="flex-1 space-y-3">
            <h3 className="text-4xl ">Would you like a Cup of Delicious Coffee?</h3>
            <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button  className="bg-[#E3B577] py-2 px-3 text-black rounded-md">Learn More</button>
           </div>
        </div>
    );
};

export default Banner;