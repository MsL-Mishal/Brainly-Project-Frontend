import { ReactElement } from "react";
import { ArticleIcon } from "../../icons/ArticleIcon";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { OtherIcon } from "../../icons/OtherIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { VideoIcon } from "../../icons/VideoIcon";

type CardType = 'Article' | 'Video' | 'Twitter' | 'Other';

interface CardPropsInterface {
    type: CardType,
    title: string,
    date: string,
    link: string,
    content?: string | ReactElement,
    tags?: string[]
}

const cardTypeIcon = {
    'Article': <ArticleIcon size="md" />,
    'Video': <VideoIcon size="md" />,
    'Twitter': <TwitterIcon size="md" />,
    'Other': <OtherIcon size="md" />
}

// Returns a Card component
export function Card(props: CardPropsInterface) {
    return <div>
        <div className="bg-white rounded-md p-4 max-w-96 max-h-96 min-w-72 min-h-48 border border-gray-200">
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <div className="px-2">
                        {cardTypeIcon[props.type]}
                    </div>

                    <div className="px-2 font-medium">
                        {props.title}
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="px-2">
                        <a href={props.link} target="_blank" >
                            <ShareIcon size='sm' />
                        </a>
                    </div>

                    <div className="px-2">
                        <DeleteIcon size='sm' />
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center py-8">
                { props.type === 'Article' && <div> { props.content } </div> }

                { props.type === 'Other' && <div> { props.content } </div> }

                { props.type === 'Twitter' && <div>
                        <blockquote className="twitter-tweet">
                            <a href={ props.link }></a> 
                        </blockquote>
                    </div>
                }

                { props.type === 'Video' && <div>
                        <iframe className='w-full h-full rounded-lg' src={props.link.replace('watch','embed').replace('?v=', '/')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                }
            </div>

            <div className="flex justify-between">
                {props.tags?.map((tag, index) => {
                    return <span key={index} className="bg-gray-200 text-gray-600 text-sm rounded-full px-2 mx-1">
                        {tag}
                    </span>
                })}
            </div>

            <div className="flex justify-start pl-2 text-sm">
                Added on {props.date}
            </div>
        </div>
    </div>
}