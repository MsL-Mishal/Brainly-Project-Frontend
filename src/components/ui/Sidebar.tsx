import { ArticleIcon } from "../../icons/ArticleIcon";
import { HashtagIcon } from "../../icons/HashtagIcon";
import { LightBulbIcon } from "../../icons/LightBulbIcon";
import { LinkIcon } from "../../icons/LinkIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { VideoIcon } from "../../icons/VideoIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return <div className="bg-white w-72 h-screen border-r-2 rounded-r-md py-2">
        <div className="flex justify-center items-center gap-2 h-16  text-primaryblue rounded-r-md text-4xl font-semibold">
            <LightBulbIcon size="lg" />
            Brainly
        </div>

        <div className="flex flex-col gap-0 py-2">
            <SidebarItem icon={<TwitterIcon size="md" />} label="Tweets" active={true} />

            <SidebarItem icon={<VideoIcon size="md" />} label="Videos" active={false} />

            <SidebarItem icon={<ArticleIcon size="md" />} label="Documents" active={false} />

            <SidebarItem icon={<LinkIcon size="md" />} label="Links" active={false} />

            <SidebarItem icon={<HashtagIcon size="md" />} label="Tags" active={false} />
        </div>
    </div>
}