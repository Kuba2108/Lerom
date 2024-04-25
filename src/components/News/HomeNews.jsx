import React from 'react';
import Tt from "../../assets/img/unsplash_wQLAGv4_OYs.png"
import Tg from "../../assets/img/unsplash_6lQDFGOB1iw.png"
const HomeNews = () => {
    return (
        <section>
            <div className="container">
                <h1 className="py-[35px]">Главная >> <span className="font-bold text-[18px]">Новости</span></h1>
                <div>
                    <img src={Tt} alt="img"/>
                    <div>
                        <h1 className="font-bold text-[25px] pt-[30px]">заголовок новости</h1>
                        <p className="text-[#071828] py-[20px]">
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        </p>
                        <p className="text-[#8A8F94] mb-[60px]">Дата публикации:  23.11.21</p>
                    </div>
                </div>
                <div>
                    <img src={Tt} alt="img"/>
                    <div>
                        <h1 className="font-bold text-[25px] pt-[30px]">заголовок новости</h1>
                        <p className="text-[#071828] py-[20px]">
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        </p>
                        <p className="text-[#8A8F94] mb-[60px]">Дата публикации:  23.11.21</p>
                    </div>
                </div>
                <div>
                    <img src={Tg} alt="img"/>
                    <div>
                        <h1 className="font-bold text-[25px] pt-[30px]">заголовок новости</h1>
                        <p className="text-[#071828] py-[20px]">
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        </p>
                        <p className="text-[#8A8F94]">Дата публикации:  23.11.21</p>
                    </div>
                </div>
                <button className="text-[#071828] border-[#071828] text-[20px] font-bold border-y-[2px] w-full py-[20px] my-[50px]">
                    показать еще новости
                </button>
            </div>
        </section>
    );
};

export default HomeNews;