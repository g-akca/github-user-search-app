function ProfileHeader({ data, className }) {
  return (
    <div className={`flex flex-col gap-1 tablet:flex-row tablet:justify-between ${className}`}>
      <div className="flex flex-col gap-0.5">
        <h2 className="text-[26px] leading-[120%] font-bold text-neutral-700 dark:text-white">{data.name}</h2>
        <p className="text-[16px] leading-base text-blue-500 dark:text-blue-300">@{data.login}</p>
      </div>

      <p>
        Joined {new Date(data.created_at).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        })}
      </p>
    </div>
  )
}

export default ProfileHeader;