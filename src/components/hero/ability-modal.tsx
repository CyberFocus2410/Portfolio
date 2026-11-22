"use client";

import * as React from "react";
import { AbilityCard3D } from "@/components/hero/ability-card-3d";

interface AbilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AbilityModal({ isOpen, onClose }: AbilityModalProps) {
  return <AbilityCard3D isOpen={isOpen} onClose={onClose} />;
}
