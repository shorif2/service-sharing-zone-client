

const Faq = () => {
    return (
        <section className="">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto pb-28 ">
            <div className="pb-16">
            <h2 className="text-2xl text-center font-semibold sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 mb-8 text-center dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
            </div>
            <div className="space-y-4">
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-4 focus:outline-none focus-visible:ri">Ex orci laoreet egestas sapien magna egestas scelerisque?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-4 focus:outline-none focus-visible:ri">Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-4 focus:outline-none focus-visible:ri">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-4 focus:outline-none focus-visible:ri">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                </details>
                
            </div>
        </div>
    </section>
    );
};

export default Faq;