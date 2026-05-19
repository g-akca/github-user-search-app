import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

function ProfileSection({ data, error }) {
  return (
    <main 
      className="
        bg-white dark:bg-neutral-800 rounded-[15px] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.2)] dark:shadow-none 
        px-6 py-8 flex flex-col gap-6 tablet:px-8 tablet:py-12 tablet:flex-row tablet:gap-8 desktop:p-12
      "
    >
      {!error ? (
        <>
          <div className="flex gap-5 items-start">
            <img src={data.avatar_url} alt="Profile image" className="w-17.5 aspect-square rounded-full tablet:w-29.25" />

            <ProfileHeader data={data} className="tablet:hidden" />
          </div>
          
          <div className="grow flex flex-col gap-6">
            <ProfileHeader data={data} className="hidden tablet:flex" />

            <ProfileInfo data={data} />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-neutral-700 dark:text-white text-[22px] leading-[140%] font-bold">No results found!</h2>

          <p className="text-neutral-300 dark:text-neutral-200">We couldn’t find any GitHub users matching your search. Please double-check the username and try again.</p>
        </div>
      )}
    </main>
  )
}

export default ProfileSection;