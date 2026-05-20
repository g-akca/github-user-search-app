import LocationIcon from "./icons/LocationIcon";
import TwitterIcon from "./icons/TwitterIcon";
import WebsiteIcon from "./icons/WebsiteIcon";
import CompanyIcon from "./icons/CompanyIcon";

function ProfileInfo({ data }) {
  return (
    <div className="flex flex-col gap-6">
      <p className={data.bio || "opacity-75"}>{data.bio ? data.bio : "This profile has no bio"}</p>

      <div className="bg-neutral-100 dark:bg-neutral-900 rounded-[10px] py-4 px-5 flex flex-col gap-4 tablet:px-8 tablet:grid tablet:grid-cols-3">
        <div className="flex flex-col gap-1">
          <p className="text-[13px] leading-base">Repos</p>
          <p className="text-neutral-700 dark:text-white font-bold text-[22px] leading-[140%]">{data.public_repos}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[13px] leading-base">Followers</p>
          <p className="text-neutral-700 dark:text-white font-bold text-[22px] leading-[140%]">{data.followers}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[13px] leading-base">Following</p>
          <p className="text-neutral-700 dark:text-white font-bold text-[22px] leading-[140%]">{data.following}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 tablet:grid tablet:grid-cols-2">
        <div className={`flex items-center gap-4 ${data.location || "opacity-70"}`}>
          <LocationIcon className="text-neutral-900 dark:text-white" />
          <p>{data.location ? data.location : "Not Available"}</p>
        </div>

        <div className={`flex items-center gap-4 ${data.twitter_username || "opacity-70"}`}>
          <TwitterIcon className="text-neutral-900 dark:text-white" />
          <p>{data.twitter_username ? data.twitter_username : "Not Available"}</p>
        </div>

        <div className={`flex items-center gap-4 focus-within:rounded-sm focus-within:outline-offset-[3px] focus-within:outline-2 focus-within:outline-blue-500 ${data.blog || "opacity-70"}`}>
          <WebsiteIcon className="text-neutral-900 dark:text-white" />
          <a href={data.blog} className="hover:underline focus:outline-none">{data.blog ? data.blog : "Not Available"}</a>
        </div>

        <div className={`flex items-center gap-4 ${data.company || "opacity-70"}`}>
          <CompanyIcon className="text-neutral-900 dark:text-white" />
          <p>{data.company ? data.company : "Not Available"}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;