import { Callout } from "nextra/components";

export default function BannerCallout() {
  return (
    <div className="py-3">
      <Callout type="info" emoji="ℹ️">
        Click on an Icon to copy it's name
      </Callout>
    </div>
  );
}
