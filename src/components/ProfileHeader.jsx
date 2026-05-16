function ProfileHeader() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-0.5">
        <h2 className="text-[26px] leading-[120%] font-bold text-neutral-700">The Octocat</h2>
        <p className="text-[16px] leading-base text-blue-500">@octocat</p>
      </div>

      <p>Joined 25 Jan 2011</p>
    </div>
  )
}

export default ProfileHeader;