import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

function ProfileSection({ data, error }) {
  return (
    <main className="bg-white rounded-[15px] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.2)] px-6 py-8 flex flex-col gap-6">
      {!error ? (
        <>
          <div className="flex gap-5 items-start">
            <img src={data.avatar_url} alt="Profile image" className="w-17.5 aspect-square rounded-full" />

            <ProfileHeader data={data} />
          </div>
          
          <ProfileInfo data={data} />
        </>
      ) : (
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-neutral-700 text-[22px] leading-[140%] font-bold">No results found!</h2>

          <p className="text-neutral-300">We couldn’t find any GitHub users matching your search. Please double-check the username and try again.</p>
        </div>
      )}
    </main>
  )
}

export default ProfileSection;