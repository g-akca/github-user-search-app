import locationIcon from "/images/icon-location.svg";
import twitterIcon from "/images/icon-twitter.svg";
import websiteIcon from "/images/icon-website.svg";
import companyIcon from "/images/icon-company.svg";

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
          <img src={locationIcon} alt="Location icon" />
          <p>{data.location ? data.location : "Not Available"}</p>
        </div>

        <div className={`flex items-center gap-4 ${data.twitter_username || "opacity-70"}`}>
          <img src={twitterIcon} alt="Twitter icon" />
          <p>{data.twitter_username ? data.twitter_username : "Not Available"}</p>
        </div>

        <div className={`flex items-center gap-4 focus-within:rounded-sm focus-within:outline-offset-[3px] focus-within:outline-2 focus-within:outline-blue-500 ${data.blog || "opacity-70"}`}>
          <img src={websiteIcon} alt="Website icon" />
          <a href={data.blog} className="hover:underline focus:outline-none">{data.blog ? data.blog : "Not Available"}</a>
        </div>

        <div className={`flex items-center gap-4 ${data.company || "opacity-70"}`}>
          <img src={companyIcon} alt="Company icon" />
          <p>{data.company ? data.company : "Not Available"}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;