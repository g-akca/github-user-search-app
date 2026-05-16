import locationIcon from "/images/icon-location.svg";
import twitterIcon from "/images/icon-twitter.svg";
import websiteIcon from "/images/icon-website.svg";
import companyIcon from "/images/icon-company.svg";

function ProfileInfo() {
  return (
    <div className="flex flex-col gap-6">
      <p className="opacity-75">This profile has no bio</p>

      <div className="bg-neutral-100 rounded-[10px] py-4 px-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-[13px] leading-base">Repos</p>
          <p className="text-neutral-700 font-bold text-[22px] leading-[140%]">8</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[13px] leading-base">Followers</p>
          <p className="text-neutral-700 font-bold text-[22px] leading-[140%]">3938</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[13px] leading-base">Following</p>
          <p className="text-neutral-700 font-bold text-[22px] leading-[140%]">9</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img src={locationIcon} alt="Location icon" />
          <p>San Francisco</p>
        </div>

        <div className="flex items-center gap-4 opacity-70">
          <img src={twitterIcon} alt="Twitter icon" />
          <p>Not Available</p>
        </div>

        <div className="flex items-center gap-4">
          <img src={websiteIcon} alt="Website icon" />
          <p>https://github.blog</p>
        </div>

        <div className="flex items-center gap-4">
          <img src={companyIcon} alt="Company icon" />
          <p>@github</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;